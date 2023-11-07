'use client';

import styles from './recipepopup.module.css';
import Image from 'next/image';

export default function RecipePopUp({ recipe }) {
    return (
        <div className={styles.popup_container}>
            <div className={styles.recipe_banner}>
                <Image src={recipe.image} alt={recipe.title} className={styles.recipe_image} width={400} height={250} />
                <p className={styles.recipe_text}>
                    Recipe for <span className={styles.recipe_name}>{recipe.title}</span>
                </p>
            </div>
            <div className={styles.recipe_informations_container}></div>
        </div>
    );
}
