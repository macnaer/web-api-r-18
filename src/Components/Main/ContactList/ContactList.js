// import components
import ContatItem from "./ContactItem/ContactItem";

const ContactList = ({ List, onStatusChange }) => {

    const item = List.map(listItem => {
        return (
            <ContatItem key={listItem.Id} {...listItem}
                onStatusChange={() => onStatusChange(listItem.Id)} />
        )
    })

    return (
        <section>
            {item}
        </section>
    )
}

export default ContactList;