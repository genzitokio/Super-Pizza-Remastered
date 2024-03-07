import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import cls from './ProfileIcon.module.scss';

export const ProfileButton = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    return (
        <button
            type="button"
            className={classNames(cls.ProfileBlock, {}, [theme])}
        >
            {t('Профиль')}
        </button>
    );
};
