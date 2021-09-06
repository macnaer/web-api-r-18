import ContactList from "../ContactList"

const ContactItem = ({ Name, Email, Phone, Image, Status, onStatusChange }) => {

    let defaultStatus = "";
    if (Status === "Friend") {
        defaultStatus = "lab lab-warning";
    }
    else if (Status === "Work") {
        defaultStatus = "lab lab-success"
    }
    else if (Status === "Family") {
        defaultStatus = "lab lab-primary"
    }
    else if (Status === "Private") {
        defaultStatus = "lab lab-danger"
    }

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
                <div className={defaultStatus} onClick={onStatusChange} >{Status}</div>
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