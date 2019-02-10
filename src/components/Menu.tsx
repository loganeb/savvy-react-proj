import * as React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component <{}> {
    public render() {
        return(
            <nav className="Menu col-md-3">
                <ul className="nav-links">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/billing" >Billing</Link></li>
                    <li><Link to="/messages" >Messages</Link></li>
                </ul>
            </nav>
        );
    }
}

export default Menu;
