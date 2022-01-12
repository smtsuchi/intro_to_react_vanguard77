import React, {useState} from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = (props) => {
    const [redirect, setRedirect] = useState(null);


    const sendCredentials = async (e) => {
        console.log('did i run?')
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/api/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: e.target.username.value,
                password: e.target.password.value
            })
        })
        const data = await res.json();
        console.log(data);
        if (data.status === 'success'){
            props.logMeIn(data.data)
            setRedirect('/shop')
        }
    }

    return (
        redirect ? <Navigate to='/shop'/> :
        <>
        <div className='container'>
            <form onSubmit={(e)=>{sendCredentials(e)}}>
                <div className="form-group">
                    <fieldset>
                        <label htmlFor="username">Username</label>
                        <input className="form-control" id="username" name="username" placeholder="Username" required="" type="text" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Password</label>
                        <input className="form-control" id="password" name="password" placeholder="Password" required="" type="password" />
                    </fieldset>
                    <fieldset>
                        <input className="form-check-input" id="remember_me" name="remember_me" type="checkbox" value="y" />
                        <label className="form-check-label" htmlFor="remember_me">Remember Me</label>
                    </fieldset>
                    <input className="btn btn-primary" id="submit" name="submit"  type="submit" value="Submit" />
                </div>
            </form>
        </div>
        <div className="mt-2 text-center">Don't have an account? <Link className="text-decoration-none" to="/register">Register</Link></div>
        </>
    )
}
export default Login