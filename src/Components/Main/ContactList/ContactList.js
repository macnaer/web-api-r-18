// import components
import ContatItem from "./ContactItem/ContactItem";

const ContactList = ({ List, onStatusChange, onDelete }) => {

    const item = List.map(listItem => {
        return (
            <ContatItem key={listItem.Id} {...listItem}
                onStatusChange={() => onStatusChange(listItem.Id)}
                onDelete={() => onDelete(listItem.Id)} />
        )
    })

    return (
        <section>
            {item.length > 0 ? item : <p className="emptyList">Contact list is empty.</p>}
        </section>
    )
}

export default ContactList;