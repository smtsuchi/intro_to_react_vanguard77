import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            redirect: null
        }
    }

    sendCredentials = async (e) => {
        console.log('did i run?')
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/api/register', {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
            },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value,
                confirmPassword: e.target.confirm_password.value
            })
        })
        const data = await res.json();
        console.log(data);
        if (data.status === 'success'){
            return res.redirect("/login");
        }
    }

    render() {
        return (
            <>
            <div className='container'>
                <form onSubmit={(e)=>{this.sendCredentials(e)}}>
                    <div className="form-group">
                        <fieldset>
                            <label htmlFor="username">Username</label>
                            <input className="form-control" id="username" name="username" placeholder="Username" required="" type="text" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input className="form-control" id="email" name="email" placeholder="Email" required="" type="email" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" name="password" placeholder="Password" required="" type="password" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required="" type="password" />
                        </fieldset>
                        <input className="btn btn-primary" id="submit" name="submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
            <div className="mt-2 text-center">Already have an account? <Link className="text-decoration-none" to="/login">Login</Link></div>
            </>
        )
    }
}
