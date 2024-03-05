import { useTranslation } from 'react-i18next';
import React from 'react';
import Switcher from 'shared/ui/Switcher/Switcher';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Switcher
            id="language-toggle"
            checked={i18n.language === 'en'}
            onChange={toggle}
            labelLeft={t('ru ')}
            labelRight={t('en ')}
        />
    );
};
