import React, { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import ThemeSwitcher from 'shared/ui/ThemeSwitcher/ui/ThemeSwitcher';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={cls.Links}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.catalog}
                    className={cls.item}
                >
                    <span className={cls.link}>
                        {t('Каталог')}
                    </span>
                </AppLink>
            </div>

            <div className={cls.SwitchersBlock}>

                <ThemeSwitcher />
                <LangSwitcher />
            </div>

        </div>
    );
};
