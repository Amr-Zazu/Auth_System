import React   from 'react';
import Navbar from '../components/Navbar';

const Layout = (props) => (
    <div>
        <Navbar />
        {props.childern}
    </div>
);


export default Layout;