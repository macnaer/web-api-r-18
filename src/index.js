import { Component } from "react";
import ReactDOM from "react-dom";
// Import Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Import css file
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import AddContact from "./Components/AddContact/AddContact";

class App extends Component {

  state = {
    ContactList: [
      {
        Id: 1,
        Name: "Alexander Verdnam",
        Phone: "+1-800-600-9898",
        Email: "alex@gmail.com",
        Status: "Friend",
        Image: "https://api.randomuser.me/portraits/men/45.jpg"
      },
      {
        Id: 2,
        Name: "Camilla Terry",
        Phone: "+1-800-345-4456",
        Email: "cam@gmail.com",
        Status: "Private",
        Image: "https://api.randomuser.me/portraits/women/55.jpg"
      },
      {
        Id: 3,
        Name: "Rita Simpson",
        Phone: "+1-800-345-1234",
        Email: "rita@gmail.com",
        Status: "Work",
        Image: "https://api.randomuser.me/portraits/women/41.jpg"
      }
    ]
  }

  onStatusChange = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    let contact = this.state.ContactList[index];

    switch (contact.Status) {
      case "Friend": contact.Status = "Work"; break;
      case "Work": contact.Status = "Family"; break;
      case "Family": contact.Status = "Private"; break;
      case "Private": contact.Status = "Friend"; break;
    }

    const tmpList = this.state.ContactList.slice();
    tmpList[index] = contact;

    this.setState({
      ContactList: tmpList
    })
  }

  onDelete = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    const partOne = this.state.ContactList.slice(0, index);
    const partTwo = this.state.ContactList.slice(index + 1);

    const tmpList = [...partOne, ...partTwo];

    this.setState({
      ContactList: tmpList
    })

  }

  render() {
    const { ContactList } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => (<Main List={ContactList} onChangeStatus={this.onChangeStatus} onDelete={this.onDelete} />)} />
          <Route path="/add-contact" exact render={() => (<AddContact />)} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
