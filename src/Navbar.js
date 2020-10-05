import React, { Component } from 'react'
import './Navbar.css'
import DrawerToggle from './DrawerToggle'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="navbar__toggle" /*style={{ backgroundColor: 'pink' }}*/><DrawerToggle click={this.props.DrawerToggleHandler} /></div>
                <div className="navbar__logo" /*style={{ backgroundColor: 'pink' }}*/><a href="/">LOGO</a></div>
                <div className="space"></div>
                <div className="navbar__links">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Products</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
