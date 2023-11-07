import React, { useState } from 'react';
import styles from './recipes.module.css';
import SideBar from '../SideBar/side';
import PopUp from '../RecipesFilteringPopUp/filteringpopup';
import RecipePopUp from '../RecipePopUp/recipepopup';
import Carousel from '../RecipeCarousel/carousel';
import NavBar from '../NavBar/navbar';

export default function Recipes({ recipes }) {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [isRecipeVisible, setRecipeVisibility] = useState(false);
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const togglePopupVisibility = () => {
        setPopupVisibility(!isPopupVisible);
    };

    const toggleRecipeVisibility = () => {
        setRecipeVisibility(!isRecipeVisible);
    };

    return (
        <>
            {isPopupVisible && <PopUp togglePopup={togglePopupVisibility} />}
            {isRecipeVisible && <RecipePopUp recipe={selectedRecipe} />}
            <div className={`${styles.recipes_page_whole} ${isPopupVisible ? styles.blur : ''} ${isRecipeVisible ? styles.blur : ''}`}>
                <div className={styles.recipes_page}>
                    <SideBar togglePopup={togglePopupVisibility} />
                    <div className={styles.recipes_page_content}>
                        <NavBar togglePopup={togglePopupVisibility} />
                        <Carousel togglePopup={toggleRecipeVisibility} setSelectedRecipe={setSelectedRecipe} recipes={recipes}/>
                    </div>
                </div>
            </div>
        </>
    );
}
