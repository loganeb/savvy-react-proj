import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface MenuState { // tslint:disable-line
    collapsed: boolean;
}

class Menu extends React.Component <RouteComponentProps, MenuState> {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        };

        this.hideMenu = this.hideMenu.bind(this);
        this.showMenu = this.showMenu.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.isCollapsed = this.isCollapsed.bind(this);
    }

    public hideMenu = (id: string) => (): void => {
        document.getElementById(id).style.display = "none";
    }

    public showMenu = (id: string) => (): void => {
        document.getElementById(id).style.display = "inline";
    }

    public toggleCollapse(): void {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    public isCollapsed(): string {
        return (this.state.collapsed ? " menu-collapsed" : "");
    }

    public render() {
        return(
            <nav className={"Menu col" + this.isCollapsed()}>
                <ul className="nav-links">
                    <button className="collapse-btn btn" onClick={this.toggleCollapse}>
                        <i className="fa fa-bars" aria-hidden="true" />
                    </button>
                    <li>
                        <button className="menu-btn btn">
                            <i className="fa fa-home" aria-hidden="true" />
                            <span className="menu-text">Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className="menu-btn btn"
                            onClick={this.showMenu("billing-menu")}
                            onBlur={this.hideMenu("billing-menu")}
                        >
                            <i className="fa fa-credit-card" aria-hidden="true" />
                            <span className="menu-text">Billing</span>
                        </button>
                        <div id="billing-menu" className="hover-menu">
                                <ul>
                                    <li>Accounts</li>
                                    <li>Payments</li>
                                </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);
