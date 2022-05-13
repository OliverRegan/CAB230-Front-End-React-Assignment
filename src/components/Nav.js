// Import react components
import { Link } from 'react-router-dom'

function Nav(props) {

    // Pass callback for logging out (resetting token)
    const setToken = props.setToken

    return (
        <nav id='layout-nav'>
            {/* <img src={logo} alt='volcano' /> */}
            <div className='row m-auto justify-content-center text-center py-4'>
                <h1 className='col-8 text-light'>Volcanoes of the World</h1>
            </div>
            <div className='row m-auto justify-content-center text-center'>
                <Link to={"/"} className="nav-link layout-nav-link col-md-2 text-light">Home</Link>
                <Link to={"/volcanoes"} className="nav-link layout-nav-link col-md-2 text-light">Volcanoes</Link>
                {props.token != '' ? <Link to={'/'} className="nav-link layout-nav-link col-md-2 text-light" onClick={() => setToken('')}>Logout</Link> :
                    <>
                        <Link to={"/login"} className="nav-link layout-nav-link col-md-2 text-light">Login</Link>
                        <Link to={"/register"} className="nav-link layout-nav-link col-md-2 text-light">Register</Link>
                    </>}


            </div>
            <hr className='container bg-light '></hr>
        </nav >
    )
}

export default Nav;