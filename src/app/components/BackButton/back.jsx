'use client';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './back.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';

export default function BackButton() {
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const onButtonClick = () => {
        setActive(!active);
        redirectUser();
    };

    const redirectUser = () => {
        setTimeout(() => {
            navigate('/');
        }, 700);
    };

    const getClassName = (isActive) => {
        const baseClassName = styles.button;
        const stateClassName = isActive ? styles.button_active : styles.button_inactive;

        return `${baseClassName} ${stateClassName}`;
    };

    return (
        <button className={getClassName(active)} onClick={onButtonClick}>
            <FontAwesomeIcon icon={faCaretLeft} /> Back
        </button>
    );
}
