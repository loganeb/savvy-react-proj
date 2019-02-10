import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Billing from "../pages/Billing";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import Header from "./Header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

class Layout extends React.Component <{}> {
    public render() {
        return(
            <Router>
                <div className="Layout">
                    <Header/>
                    <div className="content container-fluid">
                        <Menu />
                        <div className="content-center col-md-6">
                            <Switch>
                                <Route path="/billing" component={Billing} />
                                <Route path="/messages" component={Messages} />
                                <Route path="/" component={Home} />
                                <Route component={Home} />
                            </Switch>
                        </div>
                        <Sidebar />
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;
