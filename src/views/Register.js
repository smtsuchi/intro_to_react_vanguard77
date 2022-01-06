import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className='container'>
                <form action="" method="POST">
                    <div className="form-group">
                        <fieldset>
                            <label htmlFor="username">Username</label>
                            <input className="form-control" id="username" name="username" placeholder="Username" required="" type="text" value="" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">Email</label>
                            <input className="form-control" id="email" name="email" placeholder="Email" required="" type="email" value="" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="password">Password</label>
                            <input className="form-control" id="password" name="password" placeholder="Password" required="" type="password" value="" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input className="form-control" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required="" type="password" value="" />
                        </fieldset>
                        <input className="btn btn-primary" id="submit" name="submit" type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}
