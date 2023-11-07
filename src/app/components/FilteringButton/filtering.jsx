import { useState } from 'react';
import styles from './filtering.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

export default function ButtonDropdown({ togglePopup }) {
    const [active, setActive] = useState(false);

    const onButtonClick = () => {
        setActive(!active);
        togglePopup();
    };

    const getButtonsClassName = (isActive) => {
        const baseClassName = styles.button;
        const stateClassName = isActive ? styles.button_active : styles.button_inactive;

        return `${baseClassName} ${stateClassName}`;
    };

    return (
        <button className={getButtonsClassName(active)} onClick={onButtonClick}>
            <FontAwesomeIcon icon={faFilter} /> Filter
        </button>
    );
}
