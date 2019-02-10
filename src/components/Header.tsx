import * as React from "react";

class Header extends React.Component<{}> {
    public render() {
        return (
            <header className="Header">
                <nav className="navbar navbar-default">
                    <div className="brand navbar-brand">
                        <h1><strong>LEGAL</strong>PRACTICE</h1>
                    </div>
                    <div className="searchbar navbar-item form-inline col">
                        <input type="text" placeholder="&#xF002; Search" />
                    </div>
                    <div className="header-buttons navbar-item col">
                        <button className="btn btn-link"><i className="fa fa-bell-o" aria-hidden="true"/></button>
                        <button className="btn btn-link"><i className="fa fa-clock-o" aria-hidden="true"/></button>
                        <button className="btn btn-link"><i className="fa fa-comments" aria-hidden="true"/></button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
