import * as React from "react";

interface HeaderProps {// tslint:disable-line
    toggleSideBar(show: string): any;
}

class Header extends React.Component<HeaderProps, {}> {
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
                    <div className="header-buttons navbar-item ">
                        <button className="btn btn-link" onClick={this.props.toggleSideBar("notifications")} >
                            <i className="fa fa-bell-o" aria-hidden="true"/>
                        </button>
                        <button className="btn btn-link" onClick={this.props.toggleSideBar("transactions")}>
                            <i className="fa fa-clock-o" aria-hidden="true"/>
                        </button>
                        <button className="btn btn-link" onClick={this.props.toggleSideBar("messages")}>
                            <i className="fa fa-comments" aria-hidden="true"/>
                        </button>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
