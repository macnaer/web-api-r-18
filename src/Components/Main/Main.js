import React from "react-dom";

// import components
import ContactList from "./ContactList/ContactList";


const Main = ({ List, onStatusChange }) => {
    return (
        <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="contacts-list">
                <h5 className="title">Contact List</h5>

                <form className="ac-custom ac-checkbox ac-checkmark" autoComplete="off">
                    <div className="input-group">
                        <input type="text" className="contacts-list-search" placeholder="Search" />
                    </div>
                    <div className="unit head">
                        <div className="field name">
                            <div className="check">
                                <input id="cb1" name="cb1" type="checkbox" />
                                <label htmlFor="cb1"></label>
                                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"></svg></div>
                Name
              </div>
                        <div className="field phone">
                            Phone
              </div>
                        <div className="field email icons">
                            Email
                <div className="btn-group pull-right" role="group">
                                <button type="button" className="btn btn-default"><span className="icon icon-folder"></span></button>

                                <div className="btn-group" role="group">
                                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="icon icon-label"></span></button>

                                    <ul className="dropdown-menu pull-right">
                                        <li><a href="#"><span className="label label-success text-dark">New</span></a></li>
                                        <li><a href="#"><span className="label label-primary text-dark">Social</span></a></li>
                                        <li><a href="#"><span className="label label-warning text-dark">Spam</span></a></li>
                                    </ul>
                                </div>
                                <button type="button" className="btn btn-default"><span className="icon icon-trash"></span></button>
                            </div>
                        </div>
                    </div>
                    <ContactList List={List} onStatusChange={onStatusChange} />
                </form>
            </div>
        </div>
    )
}

export default Main;