import React from 'react';
import { NavLink } from "react-router-dom";
import "./index.css";
import { useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Navbar(props) {
    const history = useHistory();
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className='row'>
                    <div className="col- mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                        {
                                            props.user ?
                                                <li className="nav-item">
                                                    <button type="button" class="btn btn-danger" onClick={() => {
                                                        auth.signOut();
                                                        history.push("/signin");
                                                    }}>Log Out</button>
                                                </li>
                                                :
                                                <>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            exact
                                                            activeClassName="menu_active"
                                                            className="nav-link active"
                                                            aria-current="page"
                                                            to="/signup">
                                                            Sign Up
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink
                                                            exact
                                                            activeClassName="menu_active"
                                                            className="nav-link active"
                                                            to="/signin">
                                                            Sign In
                                                        </NavLink>
                                                    </li>
                                                </>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Navbar;
