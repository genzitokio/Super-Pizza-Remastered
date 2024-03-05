import {useTranslation} from 'react-i18next';
import React from 'react';
import cls from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={`${cls.switch} ${className}`}>
            <input id="language-toggle" className={`check-toggle check-toggle-round-flat ${cls.checkToggle}`}
                   type="checkbox" onClick={toggle}/>
            <label htmlFor="language-toggle"></label>
            <span className={`${cls.on} ${cls.span}`}>ru</span>
            <span className={`${cls.off} ${cls.span}`}>en</span>
        </div>


        // className={classNames('', {}, [className])}
        // theme={ButtonTheme.CLEAR}
        // onClick={toggle}
    );
};
