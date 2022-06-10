import React from "react";

export default function Card(props) {
    return (
        <>
        <div className="card">
            <img src={props.imageUrl} className="card--img"/>
            <div className="card--info">
                <div className="card--tags">
                    <img src="./images/location-icon.png" className="card--location"/>
                    <span className="card--country">{props.location}</span>
                    <span className="gray">View on Google Maps</span>
                </div>
                <p className="card--title">{props.title}</p>
                <p className="card--date">{props.startDate}, {props.endDate}</p>
                <p className="card--description">{props.description}</p>
            </div> 
        </div>
        {console.log(props)}
        {!props.last && <hr />}
        </>
    )  
}