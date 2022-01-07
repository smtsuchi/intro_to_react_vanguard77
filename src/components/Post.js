import React, { Component } from 'react'

export default class Post extends Component {
    render() {
        const p = this.props.post
        return (
            <div className="instagram-rip-off">
                <a className="card text-decoration-none text-dark">
                    <img src={p.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{p.title}</h5>
                        <p className="card-text">{p.content}</p>
                    </div>
                </a>
            </div>
        )
    }
}
