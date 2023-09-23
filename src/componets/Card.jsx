import React from 'react';
 
 

function Card(personaje) {
     
    return (
        <div className='card'>
            {personaje.id}
            <img src={personaje.image}/>
            {personaje.location}
            {personaje.origin}
            {personaje.created}
            
            <div className='card-content'>
                
                <h1>{personaje.name}</h1>
                <p>{personaje.species}</p>
                <p>{personaje.status}</p>
            </div>
            
        </div>
    );
}

export default Card;