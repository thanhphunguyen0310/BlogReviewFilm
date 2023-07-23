import React from "react";
import { useParams } from "react-router-dom";
import {Films} from '../shared/ListOfFilms'
function Detail(){
    const param=useParams();
    let id=+param.id
    console.log(id);
    console.log(Films);
    let item=Films.find(e=> {
        return e.id===id})
    
    return (
        <div className="detail">
            <img src={`../${item.img}`} /> 
            <h2>{item?.nation}</h2>
            <p>{item.inf}</p>
        </div>
    )
}
export default Detail;