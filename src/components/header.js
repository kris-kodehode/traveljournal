import React from "react"
import globe from "../images/globe.png"

export default function Header() {
    return (
        <div className="header">
            <img src= {globe} alt="" className="globe" />
            <h1>My travel journal</h1>
        </div>   
    )
}