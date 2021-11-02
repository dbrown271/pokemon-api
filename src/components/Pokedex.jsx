import React, { useState } from 'react';


const Pokedex = () => {
    const [allPokemon, setAllPokemon] = useState([])


    const pokedexInfo = () => {
        console.log("Who's That Pokemon?")
        fetch("https://pokeapi.co/api/v2/pokemon?limit=800")
            .then((response) =>{
                return response.json();
            }).then(response => {
                console.log("The Response is --->", response);
                setAllPokemon(response.results)
            }).catch(err => {
                console.log(err);
            })

            console.log("Just Checking")
    }

    return (
        <div>
            <h1>Pokemon API</h1>
            <h3>Gotta Catch'em All</h3>
            <button onClick = {pokedexInfo}>Fetch Pokemon</button>
            {
                allPokemon.map((pokemon,i) => {
                    return(
                        <div>
                            <h2> {pokemon.name} </h2>
                        </div>
                    )
                })
            }
        </div>
    );
};



export default Pokedex;