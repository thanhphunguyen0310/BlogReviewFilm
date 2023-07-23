import React, { useState } from "react";
import { Films } from "../shared/ListOfFilms";
import { Link } from "react-router-dom";
function Film(){
  const [value,setValue]=useState({})
    return (
      <div className="container" >
        {Films.map((f) => (
          <div className="column">
            <div className="cardFilm">
            <img src={f.img} />
            </div>   
            <div className="contentFilm" style={{marginBottom:"10px"}} >        
            <h3 className="title" style={{color:"beige"}}>{f.title}</h3>
            <p className="released">Released: {f.year}</p>
            <p className="nation">Nation: {f.nation}</p>
            <button><Link to={`/detail/${f.id}`}>Detail</Link></button>
            </div>
          </div>
        ))}

      <div id="popup" className="overlay">
        <div className="popup">
          <img src={value.img}/>
          <h2>{value.title}</h2>         
          <a className="close" href="#">&times;</a>
          <p>{value.inf}</p>
        </div>         
      </div>
      </div>
    );
}
export default Film;
