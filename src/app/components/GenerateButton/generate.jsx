'use client';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './generate.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const API_KEY = '861fb4441f8f454ea26ae13c09819888';

export default function GenerateButton({ selectedIngredients, setRecipes }) {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const recipesRequest = async (recipesIds) => {
        await axios
            .get(`https://api.spoonacular.com/recipes/informationBulk?ids=${recipesIds.join(',')}&apiKey=${API_KEY}`)
            .then((response) => {
                setRecipes(response.data)
            })
            .catch((error) => {
                console.log('Api zwróciło error', error);
            })
    }

    const recipesIdsRequest = async () => {
        const selectedIngredientsName = selectedIngredients.map(ingredient => ingredient.name)

        await axios
            .get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${selectedIngredientsName.join(',+')}&number=3&apiKey=${API_KEY}`)
            .then((response) => {
                recipesRequest(response.data.map(r => r.id))
            })
            .catch((error) => {
                console.log('Api zwróciło error', error);
            })
    }

    const onButtonClick = async () => {
        setActive(!active);
        recipesIdsRequest().then(() => redirectUser());
    };

    const redirectUser = () => {
        setTimeout(() => {
            navigate('/recipes');
        }, 700);
    };

    const getClassName = (isActive) => {
        const baseClassName = styles.button;
        const stateClassName = isActive ? styles.button_active : styles.button_inactive;

        return `${baseClassName} ${stateClassName}`;
    };

    return (
        <button className={getClassName(active)} onClick={onButtonClick}>
            <FontAwesomeIcon icon={faWandMagicSparkles} className={active ? styles.icon_clicked : styles.icon} />{' '}
            Generate
        </button>
    );
}
