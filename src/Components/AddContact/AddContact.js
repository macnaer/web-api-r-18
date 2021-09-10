import { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

class AddContact extends Component {
    state = {
        Name: "",
        Phone: "",
        Email: "",
        Gender: "",
        Status: "",
        Image: null,
        isRedirect: false
    }

    getName = (e) => {
        const name = e.target.value;
        this.setState({
            Name: name
        })
    }

    getEmail = (e) => {
        const email = e.target.value;
        this.setState({
            Email: email
        })
    }

    getPhone = (e) => {
        const phone = e.target.value;
        this.setState({
            Phone: phone
        })
    }

    getStatus = (e) => {
        const status = e.target.value;
        this.setState({
            Status: status
        })
    }

    getGender = (e) => {
        const gender = e.target.value;
        this.setState({
            Gender: gender
        })
    }

    getAvatar = (e) => {
        const avatar = e.target.value;
        this.setState({
            Image: avatar
        })
    }

    CreateContact = (e) => {
        e.preventDefault();
        const { Name, Phone, Email, Gender, Status, Image } = this.state;
        const { onAddContact } = this.props;
        const newContact = {
            Id: uuidv4(),
            Name,
            Phone,
            Email,
            Gender,
            Status,
            Image,
        }

        onAddContact(newContact)

        this.setState({
            isRedirect: true
        })
    }


    render() {
        let { Image, Gender, isRedirect } = this.state;

        if (isRedirect === true) {
            return <Redirect to="/" />
        }

        if (Image === null || Image == "") {
            Image = "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg";
        }
        else {
            Image = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;;
        }

        return (
            <Fragment>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link className="navbar-brand" to="/">Contact list</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2>Add new contact</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-8">
                            <form onSubmit={this.CreateContact}>
                                <div className="form-group">
                                    <label htmlFor="Name">Name</label>
                                    <input name="Name" type="text" className="form-control" onChange={this.getName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" className="form-control" onChange={this.getPhone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" onChange={this.getEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <select className="custom-select" onChange={this.getGender} >
                                        <option defaultValue>Choose...</option>
                                        <option value="women">Women</option>
                                        <option value="men">Men</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" onChange={this.getStatus} >
                                        <option defaultValue>Choose...</option>
                                        <option value="Work">Work</option>
                                        <option value="Family">Family</option>
                                        <option value="Private">Private</option>
                                        <option value="Friend">Friend</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="0" max="99" className="form-control" onChange={this.getAvatar} />
                                </div>
                                <button type="submit" className="btn btn-primary">Add new</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src={Image} className="rounded addContactImg float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddContact;