import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    mystyle = {
        position: 'fixed',
        top: '90vh',
        right: '0px',
        // height: '40px',
        width: '58px',
        // border: '3px solid black',
        borderRadius: '50px',
        fontSize: "1.5rem",
        paddingBotom: "20px",
        zIndex: 9999,
        aspectRatio: 1
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{
                    position: 'sticky',
                    top: '0',
                    zIndex: '2'
                }}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">NewsBot AI</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">technology</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <button className='btn btn-lg btn-dark mx-3 mb-4' style={this.mystyle} onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }}>&uarr;</button>
            </>
        )
    }
}

export default Navbar