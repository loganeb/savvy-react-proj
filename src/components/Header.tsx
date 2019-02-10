import * as React from "react";

class Header extends React.Component<{}> {
    public render() {
        return (
            <div className="Header">
                <div className="brand">
                    <h4>LegalPractice</h4>
                </div>
                <div className="searchbar">
                    <input type="text" placeholder="&#xF002; Search" />
                </div>
                <div className="sidebar-buttons">
                    <button className="btn btn-link"><i className="fa fa-bell-o" aria-hidden="true"/></button>
                    <button className="btn btn-link"><i className="fa fa-clock-o" aria-hidden="true"/></button>
                    <button className="btn btn-link"><i className="fa fa-comments" aria-hidden="true"/></button>
                </div>
            </div>
        );
    }
}

export default Header;
