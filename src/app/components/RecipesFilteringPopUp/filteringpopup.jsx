import { useState } from 'react';
import styles from './filteringpopup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function PopUp({ togglePopup }) {
    const [activeUnits, setActiveUnits] = useState([]);

    const onUnitClick = (index) => {
        setActiveUnits((prevActiveUnits) =>
            prevActiveUnits.includes(index)
                ? prevActiveUnits.filter((unitIndex) => unitIndex !== index)
                : [...prevActiveUnits, index]
        );
    };

    const isUnitActive = (index) => activeUnits.includes(index);

    const getUnitButtonClassName = (isActive) =>
        isActive
            ? `${styles.ingredient_button} ${styles.ingredient_unit_selector_active} `
            : `${styles.ingredient_button} ${styles.ingredient_unit_selector_unactive} `;

    const getUnitTextClassName = (isActive) =>
        isActive ? styles.ingredient_unit_active_text : styles.ingredient_unit_text;

    const onAbortClick = () => {
        togglePopup();
    };

    return (
        <div className={styles.popup_container}>
            <button className={styles.abort_popup} onClick={onAbortClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>
            <h1 className={styles.ingredient_amount_text}>
                Filter <span className={styles.ingredient_name}>recipes</span>
            </h1>
            <div className={styles.ingredient_units}>
                {[{ label: 'Vegan' }, { label: 'Vegetarian' }, { label: 'Gluten Free' }, { label: 'Dairy Free' }].map(
                    (unit, index) => (
                        <div className={styles.ingredient_unit} key={index}>
                            <button
                                className={getUnitButtonClassName(isUnitActive(index))}
                                onClick={() => onUnitClick(index)}></button>
                            <h1 className={getUnitTextClassName(isUnitActive(index))}>{unit.label}</h1>
                        </div>
                    )
                )}
            </div>
            <button className={styles.accept_button} onClick={onAbortClick}>
                <FontAwesomeIcon icon={faCheck} /> Apply
            </button>
        </div>
    );
}
