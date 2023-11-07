import styles from './smaller.module.css';
import Image from 'next/image';
import LogoImage from '../../images/logo.png';

export default function SmallerLogo() {
    return (
        <>
            <div className={styles.logo_container}>
                <Image src={LogoImage} alt="Logo" className={styles.logo_image} width={250} height={250} />
                <div className={styles.logo_rectangle}>
                    <h1 className={styles.logo_text}>Recipp</h1>
                </div>
            </div>
        </>
    );
}
