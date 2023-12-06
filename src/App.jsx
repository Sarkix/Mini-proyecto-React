import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";
import PokemonList from "./PokemonList";

const App = () => {
    return (
        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
            }}
        >
            <Router>
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route path="/pokemon-list" element={<PokemonList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
