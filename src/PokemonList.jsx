import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const PokemonList = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
            .then((response) => response.json())
            .then((data) => setPokemonList(data.results))
            .catch((error) =>
                console.error("Error fetching Pokemon data:", error)
            );
    }, []);

    return (
        <div>
            <Navbar /> {/* Agrega el componente Navbar */}
            <h1>Pokemon List</h1>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
            <Footer /> {/* Agrega el componente Footer */}
        </div>
    );
};

export default PokemonList;
