import { connect } from "react-redux";
import { useEffect } from "react";

// Import components
import Contactitem from "./ContactItem/ContactItem";

// Import service
import apiService from "../../../Services/APIService";

// Import Services
import { getAllContacts } from "../../../Actions/ContactListActions";

const ContactList = ({ List, getAllContacts }) => {

    useEffect(() => {
        apiService.getContactList().then(data => {
            getAllContacts(data);
        })
    }, [])


    const item = List.map(listItem => {
        return (
            <Contactitem key={listItem.Id}
                {...listItem} />
        )
    });
    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>
    )
}

const mapStateToProps = ({ ContactListReducer }) => {
    console.log("mapStateToProps ", ContactListReducer)
    const { List } = ContactListReducer;

    return { List };

}

const mapDispatchToProps = {
    getAllContacts
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);