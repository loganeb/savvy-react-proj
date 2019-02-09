import * as React from 'react';
import Menu from './Menu';
import Header from './Header';
import Sidebar from './Sidebar';

class Layout extends React.Component <{}> {
    render(){
        return(
            <div className='Layout'>
                <Header/>
                <div className="content">
                    <Menu />
                    <div><h3>Future Router Content</h3></div>
                    <Sidebar />
                </div>
                
            </div>
        )
    }
}

export default Layout;