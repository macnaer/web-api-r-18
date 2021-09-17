import { Component } from "react";
import ReactDOM from "react-dom";
import { v4 as uuidv4 } from 'uuid';
// Import Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Import css file
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// Import components
import Main from "./Components/Main/Main";
import NotFound from "./Components/NotFound/NotFound";
import AddContact from "./Components/AddContact/AddContact";
import EditContact from "./Components/EditContact/EditContact";

class App extends Component {

  // shouldComponentUpdate(nextState, nextProps) {
  //   console.log("nextState ", nextState)
  //   console.log("nextProps ", nextProps)
  //   if (nextProps.ContactList[1].Name === "Camilla Terry") {
  //     return false
  //   }
  //   return true
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate")
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount")
  // }

  state = {
    // ContactList: [
    //   {
    //     Id: uuidv4(),
    //     Name: "Alexander Verdnam",
    //     Phone: "+1-800-600-9898",
    //     Email: "alex@gmail.com",
    //     Status: "Friend",
    //     Gender: "men",
    //     Image: 45
    //   },
    //   {
    //     Id: uuidv4(),
    //     Name: "Camilla Terry",
    //     Phone: "+1-800-345-4456",
    //     Email: "cam@gmail.com",
    //     Status: "Private",
    //     Gender: "women",
    //     Image: 55
    //   },
    //   {
    //     Id: uuidv4(),
    //     Name: "Rita Simpson",
    //     Phone: "+1-800-345-1234",
    //     Email: "rita@gmail.com",
    //     Status: "Work",
    //     Gender: "women",
    //     Image: 41
    //   }
    // ],
    ContactList: [],
    CurrentContact: ""
  }

  URL = "https://react-18-ae119-default-rtdb.firebaseio.com/contact.json";

  componentDidMount() {
    console.log("componentDidMount")
  }

  updateContactList = (list) => {
    fetch(this.URL, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "PUT",
      body: JSON.stringify(list)
    })
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

  onAddContact = (newContact) => {
    const tmpList = this.state.ContactList.slice();
    tmpList.unshift(newContact);

    this.setState({
      ContactList: tmpList
    })
    this.updateContactList(tmpList)
  }

  onGetCurrentContact = (Id) => {
    const index = this.state.ContactList.findIndex(elem => elem.Id === Id);
    const currentContact = this.state.ContactList[index];
    console.log(currentContact);
    this.setState({
      CurrentContact: currentContact
    })
  }

  render() {
    const { ContactList, CurrentContact } = this.state;
    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => (<Main List={ContactList} onGetCurrentContact={this.onGetCurrentContact} onChangeStatus={this.onChangeStatus} onDelete={this.onDelete} />)} />
          <Route path="/add-contact" exact render={() => (<AddContact onAddContact={this.onAddContact} />)} />
          <Route path="/edit-contact" exact render={() => (<EditContact CurrentContact={CurrentContact} />)} />
          <Route component={NotFound} />
        </Switch>
      </Router>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
