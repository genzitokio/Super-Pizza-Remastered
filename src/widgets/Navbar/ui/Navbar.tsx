import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import Logo from 'shared/assets/icons/logo.svg'
import Profile from 'shared/assets/icons/profile.svg'
import Cart from 'shared/assets/icons/telejka.svg'
import {Search} from "widgets/Search";
import {Link} from "react-router-dom";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import {useTheme} from "app/providers/ThemeProvider";
import {useTranslation} from "react-i18next";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";


interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {
    const {theme} = useTheme();
    const { t } = useTranslation();



    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.NavbarLeft, {}, [className])}>
                <Link to="/">
                <Logo/>
                </Link>
                <div className={classNames(cls.NavbarLeftContent, {}, [className])}>

                    <div className={classNames(cls.NavbarTitle, {}, [className])}>
                        {t('РЕАКТ ПИЦЦА')}
                    </div>
                    <div className={classNames(cls.NavbarSubtitle, {}, [className])}>
                        {t('Самая вкусная пицца во вселенной')}
                    </div>
                </div>
            </div>


            {/*<Search  searchValue={searchValue} setSearchValue={setSearchValue}/>*/}
            <Search/>
            <ThemeSwitcher/>
            <LangSwitcher/>

            <div className={classNames(cls.NavbarRight, {}, [className])}>
                <a href="#">
                    <Profile/>
                </a>
                <div

                    className={classNames(cls.NavbarRightBtn, {}, [theme])}>
                    {/*<div>{totalPrice}</div>*/}
                    <div>123</div>
                    <Link to="/cart">
                    <Cart/>
                    </Link>
                    {/*<div>{totalCount}</div>*/}
                    <div>123</div>
                </div>
            </div>


        </div>
    );
};
