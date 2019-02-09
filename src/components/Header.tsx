import * as React from "react";

class Header extends React.Component <{}> {
    public render() {
        return(
            <div className="Header container-fluid">
                <h4>LegalPractice</h4>
                <input type="text" placeholder="Search"/>
            </div>
        );
    }
}

export default Header;
