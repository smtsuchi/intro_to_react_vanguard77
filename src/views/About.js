import React, { Component } from 'react'

export default class About extends Component {
    constructor() {
        super();
        this.state = {
            about: 'page'
        }
    }

    loopThroughNames (listOfNames) {
        return listOfNames.map(myName => <li className="list-group-item">{myName}</li>)
    }

    render() {
        return (
            <div>
                <h2>This is the about page</h2>
                {this.loopThroughNames(this.props.names)}
                
            </div>
        )
    }
}
