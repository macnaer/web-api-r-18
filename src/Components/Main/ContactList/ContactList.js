// import components
import ContatItem from "./ContactItem/ContactItem";

const ContactList = ({ List }) => {

    const item = List.map(listItem => {
        return (
            <ContatItem key={listItem.Id} {...listItem} />
        )
    })

    return (
        <section>
            {item}
        </section>
    )
}

export default ContactList;