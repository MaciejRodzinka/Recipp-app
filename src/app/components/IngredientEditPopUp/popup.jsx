import React, { useState } from 'react';
import styles from './popup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function PopUp({ togglePopUp, abortPopUp, ingredient, isEditing, onSave, editingIndex }) {
    const [activeUnit, setActiveUnit] = useState(null);
    const [amount, setAmount] = useState('');

    const onUnitClick = (index) => {
        if (activeUnit === index) {
            setActiveUnit(null);
        } else {
            setActiveUnit(index);
        }
    };

    const getUnitButtonClassName = (isActive) =>
        isActive
            ? `${styles.ingredient_button} ${styles.ingredient_unit_selector_active} `
            : `${styles.ingredient_button} ${styles.ingredient_unit_selector_unactive} `;

    const getUnitTextClassName = (isActive) =>
        isActive ? styles.ingredient_unit_active_text : styles.ingredient_unit_text;

    const handleAction = () => {
        if (amount > 0) {
            const unitOptions = ['kg', 'g', 'pc'];
            const selectedUnit = activeUnit != null ? unitOptions[activeUnit] : 'pc';

            if (isEditing) {
                onSave({ name: ingredient, amount, unit: selectedUnit, index: editingIndex });
            } else {
                togglePopUp({ name: ingredient, amount, unit: selectedUnit });
            }

            setAmount('');
            setActiveUnit(null);
        }
    };

    return (
        <div className={styles.popup_container}>
            <button className={styles.abort_popup} onClick={abortPopUp}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h1 className={styles.ingredient_amount_text}>
                {isEditing ? 'Edit the amount of' : 'Insert the amount of'}{' '}
                <span className={styles.ingredient_name}>
                    {ingredient.length > 20 ? `${ingredient.slice(0, 20)}...` : ingredient}
                </span>
            </h1>
            <div className={styles.ingredient_unit_specify_container}>
                <div className={styles.ingredient_unit_specify_input}>
                    <button
                        className={`${styles.ingredient_button} ${styles.specify_ingredient_unit_button}`}
                        onClick={handleAction}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                    <input
                        type="number"
                        className={styles.ingredient_specify}
                        placeholder="Amount..."
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.ingredient_units}>
                <div className={styles.ingredient_unit}>
                    <button
                        className={getUnitButtonClassName(activeUnit === 0)}
                        onClick={() => onUnitClick(0)}></button>
                    <h1 className={getUnitTextClassName(activeUnit === 0)}>Kilograms</h1>
                </div>
                <div className={styles.ingredient_unit}>
                    <button
                        className={getUnitButtonClassName(activeUnit === 1)}
                        onClick={() => onUnitClick(1)}></button>
                    <h1 className={getUnitTextClassName(activeUnit === 1)}>Grams</h1>
                </div>
                <div className={styles.ingredient_unit}>
                    <button
                        className={getUnitButtonClassName(activeUnit === 2)}
                        onClick={() => onUnitClick(2)}></button>
                    <h1 className={getUnitTextClassName(activeUnit === 2)}>Pieces</h1>
                </div>
            </div>
        </div>
    );
}
