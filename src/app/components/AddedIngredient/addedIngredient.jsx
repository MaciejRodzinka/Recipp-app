import React, { useState } from 'react';
import styles from './addedIngredient.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

export default function AddedIngredient({ name, amount, unit, onDelete, onEdit, index }) {
    const [active, setActive] = useState(false);

    const handleDelete = () => {
        onDelete(index);
    };

    const handleEdit = () => {
        onEdit(index, { name, amount, unit });
        setActive(true);
    };

    const getIngredientContainerClassName = (isActive) => {
        const baseClassName = styles.added_ingredient_container;
        const secondClassNameColor = isActive
            ? styles.added_ingredient_container_color_2
            : styles.added_ingredient_container_color_1;

        return `${baseClassName} ${secondClassNameColor}`;
    };

    return (
        <div className={getIngredientContainerClassName(active)}>
            <span className={`${styles.ingredient_text} ${styles.ingredient_text_name}`}>{name}</span>
            <span className={styles.ingredient_text}>-</span>
            <span className={styles.ingredient_text}>
                {amount}
                {unit}
            </span>
            <FontAwesomeIcon className={`${styles.icon} ${styles.pencil_icon}`} icon={faPen} onClick={handleEdit} />
            <FontAwesomeIcon className={`${styles.icon} ${styles.trash_icon}`} icon={faTrash} onClick={handleDelete} />
        </div>
    );
}
