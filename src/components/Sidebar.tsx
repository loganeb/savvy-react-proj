import * as React from "react";
import { Messages, Notifications, Transactions } from "./SidebarExamples";

interface SideBarProps { // tslint:disable-line
    display: boolean;
    header: string;
    show: string;
    toggleDisplay(): any;
}

class Sidebar extends React.Component <SideBarProps, {}> {
    public getBody() {
        switch (this.props.show) {
            case "notifications":
                return(
                    <Notifications />
                );
            case "messages":
                return(
                    <Messages />
                );
            case "transactions":
                 return(
                     <Transactions />
                 );
            default:
                    break;
        }
    }

    public render() {
        return(
            <div className="Sidebar col" id="sidebar">
                <div className="sidebar-header">
                    <span>{this.props.header}</span>
                    <button className="close-btn btn" onClick={this.props.toggleDisplay()}>
                        <i className="fa fa-times" aria-hidden="true"/>
                    </button>
                </div>
                <div className="sidebar-body">
                    {this.getBody()}
                </div>
            </div>
        );
    }
}

export default Sidebar;
