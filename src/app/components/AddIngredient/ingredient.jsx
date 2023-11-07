import React, { useState, useEffect } from 'react';
import styles from './ingredient.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const API_KEY = '861fb4441f8f454ea26ae13c09819888';

export default function IngredientAdd({ onAddIngredient }) {
    const [active, setActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [firstIngredient, setFirstIngredient] = useState(null);
    const [isRequestFinished, setIsRequestFinished] = useState(false);

    useEffect(() => {
        if (isRequestFinished) setIsRequestFinished(false);
        if (inputValue.length < 3) return;

        const request = async () => {
            await axios.get(`https://api.spoonacular.com/food/ingredients/search?query=${inputValue}&number=15&apiKey=${API_KEY}`)
                .then((response) => {
                    setFirstIngredient(response.data.results[0]);
                    setIsRequestFinished(true);
                })
                .catch((error) => {
                    console.log('Api zwróciło error', error);
                })
        }

        const timeout = setTimeout(request, 1000);
        return () => clearTimeout(timeout);
    }, [inputValue]);

    const handleAddIngredient = () => {
        if (!firstIngredient || !isRequestFinished) return;

        // togglePopUp(firstIngredient.name);
        setInputValue('');
        setActive(!active);
        onAddIngredient(firstIngredient);
    };

    const getIngredientIconClassName = (isActive) => {
        const baseClassName = styles.icon;
        const secondClassNameColor = isActive ? styles.icon_active : styles.icon_inactive;

        return `${baseClassName} ${secondClassNameColor}`;
    };

    const getButtonClassname = () => {
        return isRequestFinished ? styles.add_ingredient_button : styles.add_ingredient_button_inactive;
    }

    return (
        <div className={styles.ingredient_add_container}>
            <div className={styles.ingredient_add_input}>
                <button className={getButtonClassname()} onClick={handleAddIngredient}>
                    <FontAwesomeIcon icon={faPlus} className={getIngredientIconClassName(active)} />
                </button>
                <input
                    id="ingredient_specification_field"
                    type="text"
                    className={styles.ingredient_add}
                    placeholder="Ingredient..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </div>
        </div>
    );
}
