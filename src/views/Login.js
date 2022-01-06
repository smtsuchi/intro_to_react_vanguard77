import React, { Component } from 'react'

export default class Login extends Component {

    sendCredentials = async (e) => {
        console.log('did i run?')
        e.preventDefault();
        const res = await fetch('http://127.0.0.1:5000/api/login', {
            method: "POST",
            body: {
                username: e.target[0].value,
                password: e.target[1].value
            }
        })
        const data = await res.json();
        console.log(data);
    }


    render() {
        return (
            <div className='container'>
                <form onSubmit={(e)=>{this.sendCredentials(e)}}>
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
        )
    }
}
