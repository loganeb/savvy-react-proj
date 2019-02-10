import * as React from "react";

interface SideBarProps { // tslint:disable-line
    display: boolean;
}

interface SideBarState { // tslint:disable-line
    content: [];
}

class Sidebar extends React.Component <SideBarProps, SideBarState> {
    public render() {
        return(
            <div className="Sidebar col">
                <h2>Sidebar</h2>
            </div>
        );
    }
}

export default Sidebar;
