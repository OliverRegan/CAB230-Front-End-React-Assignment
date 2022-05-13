// Import react components
import { Outlet } from 'react-router-dom'

// Import custom components
import Nav from './Nav'



function Layout(props) {
    return (
        <div className='bg-dark w-100' id='layout'>
            <Nav token={props.token} setToken={props.setToken} />
            <Outlet />
        </div>
    );
};

export default Layout;