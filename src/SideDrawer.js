import React from 'react'
import './SideDrawer.css'




export default function SideDrawer(props) {


    let sideDrawer = 'drawer'
    if (props.show) {
        sideDrawer = 'drawer open'
    }

    return (
        <nav className={sideDrawer}>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    )
}
