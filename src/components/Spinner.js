import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center mb-4">
                <div className="align-self-center spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner