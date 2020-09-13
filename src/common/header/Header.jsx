import React from 'react'
import "./styles.css"

const Header = () => {
    const title = "Image Zoom"
    
    return (
       <nav className="AppBar">
            <span className="title">{title}</span>
       </nav>
    )
}

export default Header