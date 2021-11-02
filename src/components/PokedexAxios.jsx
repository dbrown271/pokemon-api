import React, { useState } from 'react';
import axios from 'axios';


const Pokedex = () => {
    const [allPokemon, setAllPokemon] = useState([])


    const pokedexInfo = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=800")
            .then(response => {
                console.log("Pokedex with Axios --->", response.data.results)
                setAllPokemon(response.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div>
            <h1>Pokemon API</h1>
            <h3>Gotta Catch'em All</h3>
            <button onClick = {pokedexInfo}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon,j) => {
                    return (
                        <div key = {{j}}>
                            <h2> {pokemon.name} </h2>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default Pokedex;