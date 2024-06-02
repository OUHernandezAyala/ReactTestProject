"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const PokemonSection = () => {
    const [pokeList, setPokeList] = useState([1])   
    useEffect(() =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0.')
            .then(response=>{
                setPokeList(response.data.results);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
              })
    }, []);
    return(
        <div id="pokemons" className="grid md:grid-cols-3 gap-4 md:gap-10 justify-center">
             {pokeList.map((pokemon, index) => (
                <Card 
                    key={index} 
                    url={pokemon.url}
                />
            ))}
        </div>
        
    )
};

export default PokemonSection;