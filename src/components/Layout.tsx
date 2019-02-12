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
    sideBarShow: string;
    sideBarVisible: boolean;
}

class Layout extends React.Component <{}, LayoutState> {
    constructor() {
        super();
        this.state = {
            sideBarHeader: "",
            sideBarShow: "",
            sideBarVisible: false,
        };
        this.toggleSideBar = this.toggleSideBar.bind(this);
    }

    public toggleSideBar = (show?: string) => () => {
        if (show && show !== this.state.sideBarShow) {
            this.setState({
                sideBarHeader: show.toUpperCase(),
                sideBarShow: show,
                sideBarVisible: true,
            });
            return;
        }
        this.setState({
            sideBarShow: "",
            sideBarVisible: !this.state.sideBarVisible,
        });
    }

    public sideBar() {
        if (this.state.sideBarVisible) {
            return(
                <Sidebar
                    display={true}
                    header={this.state.sideBarHeader}
                    show={this.state.sideBarShow}
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
                        <Header toggleSideBar={this.toggleSideBar}/>
                        <div className="content container-fluid">
                            <Menu />
                            <div className="Page col">
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
