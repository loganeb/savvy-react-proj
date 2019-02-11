import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Billing from "../pages/Billing";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Header from "./Header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

interface LayoutState {// tslint:disable-line
    sideBarHeader: string;
    sideBarContent: any;
    sideBarVisible: boolean;
}

class Layout extends React.Component <{}, LayoutState> {
    constructor() {
        super();
        this.state = {
            sideBarContent: "",
            sideBarHeader: "",
            sideBarVisible: true,
        };
        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    public toggleSideBar(): void {
        this.setState({
            sideBarVisible: !this.state.sideBarVisible,
        });
    }

    public sideBar() {
        if (this.state.sideBarVisible) {
            return(
                <Sidebar
                    display={true}
                    content={{header: "Sidebar", body: "Body text"}}
                    toggleDisplay={this.toggleSideBar}
                />
            );
        }
        return;
    }

    public render() {
        return(
            <div className="Layout">
                <Router>
                    <div>
                        <Header/>
                        <div className="content container-fluid">
                            <Menu />
                            <div className="content-center col">
                                <Switch>
                                    <Route path="/billing" component={Billing} />
                                    <Route path="/messages" component={Messages} />
                                    <Route path="/" component={Home} />
                                    <Route component={Home} />
                                </Switch>
                            </div>
                            {this.sideBar()}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Layout;
