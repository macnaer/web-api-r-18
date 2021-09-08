import { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class AddContact extends Component {
    state = {
        Name: "",
        Phone: "",
        Email: "",
        Gender: "",
        Status: "",
        Image: "https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg",
        imgLink: "",
    }



    render() {
        const { Image, Gender, isRedirect } = this.state;

        let imgLink = this.state.imgLink;
        if (Image !== "") {
            imgLink = `https://upload.wikimedia.org/wikipedia/commons/5/50/User_icon-cp.svg`;
        } else {
            imgLink = `https://api.randomuser.me/portraits/${Gender}/${Image}.jpg`;
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
                                    <input name="Name" type="text" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Phone">Phone</label>
                                    <input name="Phone" type="tel" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Avatar">Avatar</label>
                                    <input type="number" min="0" max="99" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Gender">Gender</label>
                                    <select className="custom-select" >
                                        <option selected>Choose...</option>
                                        <option value="women">Women</option>
                                        <option value="men">Men</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Status">Status</label>
                                    <select className="custom-select" >
                                        <option selected>Choose...</option>
                                        <option value="work">Work</option>
                                        <option value="family">Family</option>
                                        <option value="private">Private</option>
                                        <option value="friend">Friend</option>
                                    </select>
                                </div>
                                <button type="submit" className="btn btn-primary">Add new</button>
                            </form>
                        </div>
                        <div className="col-4">
                            <img src={imgLink} className="rounded float-left" alt="..." />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default AddContact;