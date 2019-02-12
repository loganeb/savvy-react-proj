import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

interface MenuState { // tslint:disable-line
    collapsed: boolean;
    subMenuId: string;
}

class Menu extends React.Component <RouteComponentProps, MenuState> {
    constructor() {
        super();
        this.state = {
            collapsed: true,
            subMenuId: "",
        };

        this.navigate = this.navigate.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
        this.toggleSubMenu = this.toggleSubMenu.bind(this);
        this.toggleCollapse = this.toggleCollapse.bind(this);
        this.isCollapsed = this.isCollapsed.bind(this);
    }

    public navigate = (route: string) => () => {
        this.props.history.push(route);
    }

    public hideMenu = (id: string) => (): void => {
        if (this.state.collapsed) {
            setTimeout(() => (document.getElementById(id).style.display = "none"),
            100);
        }
    }

    public toggleSubMenu = (id: string) => (): void => {
        const subMenu = document.getElementById(id);
        if (!this.state.collapsed) {
            // Close previously selected item
            if (this.state.subMenuId.length === 0 && subMenu.style.display === "inline") {
                subMenu.style.display = "none";
                return;
            }
        }
        // Current menu item selected
        if (this.state.subMenuId === id) {
            subMenu.style.display = "none";
            this.setState({
                subMenuId: "",
            });
            return;
        }
        // New menu item selected
        subMenu.style.display = "inline";
        this.setState({
            subMenuId: id,
        });
        return;
    }

    public toggleCollapse(): void {
        this.setState({
            collapsed: !this.state.collapsed,
        });

        // Hide all sub menus
        const menu = document.getElementById("menu-items");
        const subMenus: any = menu.getElementsByClassName("sub-menu");
        for(let i = 0; i < subMenus.length; i++ ){ // tslint:disable-line
            subMenus[i].style.display = "none";
        }
    }

    public isCollapsed(): string {
        return (this.state.collapsed ? " menu-collapsed" : "");
    }

    public toggleButton() {
        if (!this.state.collapsed) {
            return (<i className="fa fa-arrow-left" aria-hidden="true" />);
        }
        return (<i className="fa fa-bars" aria-hidden="true" />);
    }

    public render() {
        return(
            <nav className={"Menu col" + this.isCollapsed()}>
                <ul className="menu-items" id="menu-items">
                    <button className="collapse-btn menu-btn btn" onClick={this.toggleCollapse}>
                        {this.toggleButton()}
                    </button>
                    <li>
                        <button className="menu-btn btn" onClick={this.navigate("/")}>
                            <i className="fa fa-home" aria-hidden="true" />
                            <span className="menu-text">Dashboard</span>
                        </button>
                    </li>
                    <li>
                        <button
                            className="menu-btn btn"
                            onClick={this.toggleSubMenu("billing-menu")}
                            onBlur={this.hideMenu("billing-menu")}
                            tabIndex={0}
                        >
                            <i className="fa fa-credit-card" aria-hidden="true" />
                            <span className="menu-text">Billing</span>
                        </button>
                        <div id="billing-menu" className="sub-menu">
                                <ul>
                                    <li tabIndex={0}><Link to="/accounts">Accounts</Link></li>
                                    <li tabIndex={0}><Link to="/payments">Payments</Link></li>
                                </ul>
                        </div>
                    </li>
                    <li>
                        <button
                            className="menu-btn btn"
                            onClick={this.toggleSubMenu("contacts-menu")}
                            onBlur={this.hideMenu("contacts-menu")}
                        >
                            <i className="fa fa-user" aria-hidden="true" />
                            <span className="menu-text">Contacts</span>
                        </button>
                        <div id="contacts-menu" className="sub-menu">
                                <ul>
                                    <li tabIndex={0}><Link to="/contacts">Contact 1</Link></li>
                                    <li tabIndex={0}><Link to="/contacts">Contact 2</Link></li>
                                </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default withRouter(Menu);
