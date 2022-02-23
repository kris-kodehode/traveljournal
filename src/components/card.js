import React from "react"
import pin from "../images/pin.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={props.item.imageUrl} alt="" className="travelImg" />
            <div className="cardInfo">
                <div className="location">
                    <img src={pin} alt="" className="pin" />
                    <p className="country">{props.item.location}</p>
                    <a className="maplink" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="locationName">{props.item.title}</h2>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}