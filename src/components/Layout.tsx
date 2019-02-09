import * as React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Sidebar from "./Sidebar";

class Layout extends React.Component <{}> {
    public render() {
        return(
            <div className="Layout">
                <Header/>
                <div className="content">
                    <Menu />
                    <div><h3>Future Router Content</h3></div>
                    <Sidebar />
                </div>
            </div>
        );
    }
}

export default Layout;
