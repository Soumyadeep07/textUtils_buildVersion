import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import newsLogo from '../logo/news-logo.jpg';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class Navbar extends Component {
    static propTypes = {
        active : PropTypes.string
    }


    render() {

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-teal-700" style={{ "padding": "3px" ,
            "position": "sticky","top": "0", "zIndex": "9999 "
            }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ "paddingLeft": "20px", "color": "white", "fontStyle": "italic", "fontWeight": "bold" }}>
                        <img src={newsLogo} alt="" width="30" height="24" className="d-inline-block align-text-top rounded-circle" /> &nbsp;
                        SDNEWS</Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="home"?"active font-weight-bold":""}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="general"?"active font-weight-bold":""}`} to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="business"?"active font-weight-bold":""}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="entertainment"?"active font-weight-bold":""}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="health"?"active font-weight-bold":""}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="science"?"active font-weight-bold":""}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="sports"?"active font-weight-bold":""}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="technology"?"active font-weight-bold":""}`} to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${this.props.active==="aboutus"?"active font-weight-bold":""}`} to="/aboutus">About Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <button className="btn btn-warning" type="submit">Download App</button>
                        </form>

                    </div>
                </div>

            </nav>

        )
    }
}
