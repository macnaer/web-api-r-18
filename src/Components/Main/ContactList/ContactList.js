// Import components
import Contactitem from "./ContactItem/ContactItem";

const ContactList = ({ List, onChangeStatus, onDelete }) => {
    const item = List.map(listItem => {
        return (
            <Contactitem key={listItem.Id}
                {...listItem} onChangeStatus={() => onChangeStatus(listItem.Id)}
                onDelete={() => onDelete(listItem.Id)} />
        )
    });
    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>
    )
}

export default ContactList;