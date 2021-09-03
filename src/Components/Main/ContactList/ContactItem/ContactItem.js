import ContactList from "../ContactList"

const ContactItem = ({ Name, Email, Phone, Image, Status }) => {
    return (
        <div className="unit">
            <div className="field name">
                <div className="check">
                    <input id="cb2" name="cb1" type="checkbox" />
                    <label htmlFor="cb2"></label>
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg>

                </div>
                <div>
                    <img src={Image} alt="image" className="avatar" /> {Name}
                </div>
                <div className="lab lab-warning">{Status}</div>
            </div>
            <div className="field phone">
                {Phone}
            </div>
            <div className="field email">
                {Email}
            </div>
        </div>
    )
}

export default ContactItem;