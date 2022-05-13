// Import react components and functions
import { useState } from 'react';

// Function for posting data
async function loginRegisterUser(authentication) {


    const BaseURL = 'http://sefdb02.qut.edu.au:3001/user/'

    // Append URL with type of Post - register or login
    let URL = BaseURL + authentication.tp.toLowerCase();

    // Body of POST request
    let body = {
        "email": authentication.email,
        "password": authentication.password
    }

    // Send data and receive response data
    return fetch(URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(data => data.json())
}

function LoginRegister(props) {

    // Initialize states for form data
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Get props data
    const tp = props.type;


    // Handle login
    const handleSubmit = async () => {
        const JWT = await loginRegisterUser({
            email,
            password,
            tp
        });
        // Use call back to set token in App component
        if (props.tokenSet != undefined) {
            const setToken = props.tokenSet;
            const setTokenType = props.tokenTypeSet;
            setToken(JWT.token);
        }
    }

    return (
        <div>
            <form className="container">
                <div className="card bg-dark">
                    <div className="card-title container row justify-content-center">
                        <h2 className="text-light pt-4 col-10">
                            {tp}
                        </h2>
                    </div>
                    <div className="card-body row">
                        <div className="container col-10">
                            <p className="lead text-light">Please enter {tp === 'Login' ? <span>your</span> : <span>a new</span>} username and password:</p>
                        </div>
                        {/* Email input */}
                        <div className="container col-10 form-group py-4">
                            <label className="text-light" htmlFor="email" >Email:</label>
                            <input className="form-control" placeholder="Please enter your email" type='email' name="email" onChange={(e) => { e.preventDefault(); setEmail(e.target.value); }}></input>
                        </div>
                        {/* Password input */}
                        <div className="container col-10 form-group py-4">
                            <label className="text-light" htmlFor="password" >Password:</label>
                            <input className="form-control" placeholder="Please enter your password" type='password' name="password" onChange={(e) => { e.preventDefault(); setPassword(e.target.value); }}></input>
                        </div>
                        {/* Submit button */}
                        <div className="container col-10 form-group py-4">
                            <button className="btn  btn-primary w-100" onClick={(e) => { e.preventDefault(); handleSubmit(); }}>{tp}</button>
                        </div>
                    </div>
                </div>
            </form >
        </div >
    )
}

export default LoginRegister;