import styles from './navbar.module.css';

export default function NavBar({ isPopupVisible }) {
    return (
        <div className={`${styles.navbar_container} ${isPopupVisible ? styles.blur : ''}`}>
            <h1 className={styles.search_result}>
                Search results: found <span className={styles.recipe_amount}>n</span> recipes.
            </h1>
        </div>
    );
}
