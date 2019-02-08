import * as React from 'react';
import Menu from './Menu';
import Header from './Header';

class Layout extends React.Component <{}> {
    render(){
        return(
            <div className="Layout">
                <Header/>
                <h3>Bank Accounts</h3>
                <Menu />
            </div>
        )
    }
}

export default Layout;