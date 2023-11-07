import styles from './logo.module.css';
import Image from 'next/image';
import LogoImage from '../../images/logo.png';

export default function Logo() {
    return (
        <>
            <div className={styles.logo_container}>
                <Image src={LogoImage} alt="Logo" className={styles.logo_image} width={250} height={250} />
                <div className={styles.logo_rectangle}>
                    <h1 className={styles.logo_text}>Recipp</h1>
                </div>
            </div>
            <h1 className={styles.add_ingredient_text}>
                Insert{' '}
                <span className={`${styles.add_ingredient_text} ${styles.add_ingredient_accent_text}`}>
                    ingredients
                </span>
            </h1>
            <h2 className={`${styles.add_ingredient_text} ${styles.add_ingredient_additional_text}`}>
                Insert ingredient and its amount, the confirm{' '}
                <span
                    className={`${styles.add_ingredient_additional_text} 
                    ${styles.add_ingredient_additional_accent_text}`}>
                    using the button below
                </span>
            </h2>
        </>
    );
}
