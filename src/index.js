import { Component } from "react";
import ReactDOM from "react-dom";

// Import css file
import "./index.css";

// Import components
import SideBar from "./Components/SideBar/SideBar";
import Main from "./Components/Main/Main";

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

  render() {
    const { ContactList } = this.state;
    return (
      <div className="container bootstrap snippets bootdeys bootdey">
        <div className="row decor-default">
          <SideBar />
          <Main List={ContactList} onStatusChange={this.onStatusChange} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
