import { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>404 Page Not Found</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Link to="/">Go to home page</Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NotFound;