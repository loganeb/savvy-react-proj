import * as React from "react";

interface SideBarProps { // tslint:disable-line
    display: boolean;
    content: {
        header: string,
        body: any,
    };
    toggleDisplay(): void;
}

class Sidebar extends React.Component <SideBarProps, {}> {
    public render() {
        return(
            <div className="Sidebar col" id="sidebar">
                <div className="sidebar-header">
                    <span>{this.props.content.header}</span>
                    <button className="close-btn btn" onClick={this.props.toggleDisplay}>
                        <i className="fa fa-times" aria-hidden="true"/>
                    </button>
                </div>
                <div className="sidebar-body">
                    {this.props.content.body}
                </div>
            </div>
        );
    }
}

export default Sidebar;
