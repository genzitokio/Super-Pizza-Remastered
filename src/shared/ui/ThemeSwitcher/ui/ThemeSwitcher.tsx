import React from 'react';
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import './ThemeSwitcher.scss'
import { classNames } from 'shared/lib/classNames/classNames';


interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();

    const handleInputChange = () => {
        toggleTheme();
    };

    return (
        <>
            <input
                type="checkbox"
                id="switch"
                onChange={handleInputChange} // Обработчик изменения состояния чекбокса
                checked={theme === 'dark'} // Установка состояния чекбокса в зависимости от текущей темы
            />
            <label htmlFor="switch">Toggle</label>
            </>
    );
};