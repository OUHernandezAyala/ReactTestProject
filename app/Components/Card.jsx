"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";



const Card = ({url}) =>{
    const [pokemon, setPokemon] = useState(null)
    useEffect(() =>{
        axios.get(url)
            .then(response=>{
                setPokemon(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
              })
    });
    return(
        <div>
           {pokemon && 
           <div>              
                <div 
                className="h-70 md:h-80  rounded-t-xl flex justify-center bg-[#202020]"
                >
                    <Image 
                        className='object-scale-down rounded-xl'
                        src={pokemon.sprites.other.dream_world.front_default}
                        alt="logo" 
                        width={300}
                        height={300}
                        />
                </div>
                <div className="text-white rounded-t-xl bg-[#181818] p-2 px-4">
                    <h5 className="flex font-xl font-semibold mb-1">{pokemon.name}</h5>
                    <div className="flex gap-2">
                    {pokemon.types.map((type, index) => (
                        <p key={index} className={`pokemon-type ${type.type.name}`}>{type.type.name}</p>
                    ))}
                    </div>
                </div>
            </div>
           }
        </div>
        
    )
};

export default Card;
