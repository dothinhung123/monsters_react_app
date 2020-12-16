import React from 'react'
import './card.styles.css'
const Card =(props)=>{
  
    return(
        <div className="card">
            <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}></img>
            {props.monster.name}
        </div>
    )
}
export default Card