import React from 'react';
import Personajes from '../service/serviceRyM';
import Card from './Card'

function Grid() {
    const list = Personajes("https://rickandmortyapi.com/api/character");
    return (
        <div className='grid'>
            
            {list.slice(0,20).map((pj)=>
                <Card 
                    image = {pj.image}
                    name = {pj.name}
                    status = {pj.status}
                    species = {pj.species}
                />
            )}
            
        </div>
    );
}

export default Grid;