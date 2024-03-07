import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
import Logo from 'shared/assets/icons/logo.svg';
import { useTranslation } from 'react-i18next';
import cls from './NavbarTitle.module.scss';

interface NavbarTitleProps {
    className?: string;
}

const NavbarTitle: React.FC<NavbarTitleProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NavbarLeft, {}, [className])}>
            <Link to="/">
                <Logo />
            </Link>
            <div className={classNames(cls.NavbarLeftContent, {}, [className])}>
                <div className={classNames(cls.NavbarTitle, {}, [className])}>
                    {t('РЕАКТ ПИЦЦА')}
                </div>
                <div className={classNames(cls.NavbarSubtitle, {}, [className])}>
                    {t('Самая вкусная пицца')}
                </div>
            </div>
        </div>
    );
};

export default NavbarTitle;
