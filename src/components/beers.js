import React from 'react';
import "./beer.css"

function Beers(props) {
    return (
        <div className = "beers">
            <h3>{props.name}</h3>
            <img src = {props.picture}/>
            <p>{props.description}</p>
            <button className="like-btn" onClick = {() => props.likeFunction(props.index)}>Like</button>
        </div>
    )
}

export default Beers;