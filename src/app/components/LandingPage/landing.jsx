import React, { useState } from 'react';
import styles from './landing.module.css';
import GenerateButton from '../GenerateButton/generate';
import IngredientAdd from '../AddIngredient/ingredient';
import Logo from '../RecippLogo/logo';
import AddedIngredient from '../AddedIngredient/addedIngredient';
import PopUp from '../IngredientEditPopUp/popup';

export default function LandingPage({ setRecipes }) {
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showEditPopup, setShowEditPopup] = useState(false);
    const [ingredient, setIngredient] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState(null);

    const addIngredient = (newIngredient) => {
        setSelectedIngredients([...selectedIngredients, newIngredient]);
    };

    const handleDeleteIngredient = (index) => {
        setSelectedIngredients(selectedIngredients.filter((_, i) => i !== index));
    };

    const handleEditIngredient = (index, ingredientData) => {
        setIngredient(ingredientData.name);
        setShowEditPopup(true);
        setIsEditing(true);
        setEditingIndex(index);
    };

    const togglePopUp = (name) => {
        if (name !== '') {
            setShowPopUp(!showPopUp);
            setIngredient(name);
        }
    };

    const abortPopUp = () => {
        setShowPopUp(!showPopUp);
    };

    const handleAddIngredientFromPopUp = ({ name, amount, unit }) => {
        addIngredient(name, { amount, unit });
        setShowPopUp(false);
    };

    const handleSaveEditedIngredient = ({ name, amount, unit, index }) => {
        const updatedIngredients = [...selectedIngredients];

        updatedIngredients[index] = { name, amount, unit };
        setSelectedIngredients(updatedIngredients);
        setShowEditPopup(false);
        setIsEditing(false);
    };


    return (
        <>
            {/* {showPopUp && (
                <PopUp togglePopUp={handleAddIngredientFromPopUp} abortPopUp={abortPopUp} ingredient={ingredient} />
            )}
            {showEditPopup && (
                <PopUp
                    togglePopUp={() => setShowEditPopup(false)}
                    ingredient={ingredient}
                    isEditing={isEditing}
                    onSave={handleSaveEditedIngredient}
                    editingIndex={editingIndex}
                />
            )} */}
            <div className={`${styles.recipp_website_content} ${showPopUp || showEditPopup ? styles.blur : ''}`}>
                <div className={styles.ingredient_container}>
                    <Logo />
                    {/* <IngredientAdd onAddIngredient={addIngredient} togglePopUp={togglePopUp} /> */}
                    <IngredientAdd onAddIngredient={addIngredient} togglePopUp={togglePopUp} />
                    <div className={styles.selected_ingredients_container}>
                        {selectedIngredients.map((ingredient, index) => (
                            <AddedIngredient
                                key={index}
                                name={ingredient.name}
                                amount={ingredient.amount}
                                unit={ingredient.unit}
                                onDelete={handleDeleteIngredient}
                                onEdit={handleEditIngredient}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <GenerateButton selectedIngredients={selectedIngredients} setRecipes={setRecipes} />
            </div>
        </>
    );
}
