import React from 'react';
import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import Switcher from "shared/ui/Switcher/Switcher";


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
            <Switcher
                id='switch'
                checked={theme === 'dark'}
                onChange={handleInputChange}
                labelLeft='light'
                labelRight='dark'
            />

        </>
    );
};