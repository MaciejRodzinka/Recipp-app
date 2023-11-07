import styles from './side.module.css';
import SmallerLogo from '../RecippLogoSmaller/smaller';
import ButtonDropdown from '../FilteringButton/filtering';
import BackButton from '../BackButton/back';

export default function SideBar({ togglePopup, isPopupVisible }) {
    return (
        <div className={`${styles.sidebar_container} ${isPopupVisible ? styles.blur : ''}`}>
            <div>
                <SmallerLogo />
                <ButtonDropdown togglePopup={togglePopup} />
            </div>
            <BackButton />
        </div>
    );
}
