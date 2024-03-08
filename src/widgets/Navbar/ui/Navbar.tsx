import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import Cart from 'shared/assets/icons/telejka.svg';
import { Search } from 'widgets/Search';
import { Link } from 'react-router-dom';
import { useTheme } from 'app/providers/ThemeProvider';
import NavbarTitle from 'shared/ui/NavbarTitle/ui/NavbarTitle';
import { ProfileButton } from 'shared/ui/ProfileIcon/ui/ProfileButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    const { theme } = useTheme();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.NavbarTitleBlock, {}, [className])}>

                <NavbarTitle />
            </div>
            <div className={classNames(cls.NavbarRightBlock, {}, [className])}>

                <Search />
                <div className={classNames(cls.NavbarRightBtn, {}, [theme])}>
                    {/* <div>{totalPrice}</div> */}
                    <div>123</div>
                    <Link to="/cart">
                        <Cart />
                    </Link>
                    {/* <div>{totalCount}</div> */}
                    <div>123</div>
                </div>

                <ProfileButton />
            </div>

        </div>
    );
};
