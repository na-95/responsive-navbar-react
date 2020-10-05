import React from 'react'
import './DrawerToggle.css'


export default class DrawerToggle extends React.Component {
    render() {
        return (
            <button className="toggle" onClick={this.props.click}>
                <div className="toggle__line"></div>
                <div className="toggle__line"></div>
                <div className="toggle__line"></div>
            </button>
        )
    }
}


// export default function DrawerToggle(props) {
//     return (
//         <button className="toggle" onClick={this.props.click}>
//             <div className="toggle__line"></div>
//             <div className="toggle__line"></div>
//             <div className="toggle__line"></div>
//         </button>
//     )
// }

