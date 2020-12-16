import React from 'react'
import './search-bar.styles.css';
const SearchBar  =(props)=>{
   
    return(
        <div className="search-bar">
            <input placeholder="search monsters" type="input" value={props.value} onChange={props.handleChange}></input>
        </div>
    )
}
export default SearchBar