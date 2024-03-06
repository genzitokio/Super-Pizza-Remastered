import React from 'react';
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import Switcher from 'shared/ui/Switcher/Switcher';
import { useTranslation } from 'react-i18next';

export interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation();

    const handleInputChange = () => {
        toggleTheme();
    };

    return (
        <Switcher
            id="switch"
            checked={theme === 'dark'}
            onChange={handleInputChange}
            labelLeft={t('темная')}
            labelRight={t('светлая ')}
        />
    );
};

export default ThemeSwitcher; // Экспорт компонента по умолчанию
