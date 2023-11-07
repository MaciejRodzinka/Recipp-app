"use client";

import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/landing";
import Recipes from "./components/RecipesPage/recipes";

export default function Page() {
    const [recipes, setRecipes] = useState([])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage setRecipes={setRecipes}/>} />
                <Route path="/recipes" element={<Recipes recipes={recipes} />} />
            </Routes>
        </Router>
    );
}
