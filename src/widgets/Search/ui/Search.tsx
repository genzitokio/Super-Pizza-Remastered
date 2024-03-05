import React from 'react';
import Clear from 'shared/assets/icons/clear.svg';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';
import cls from './Search.module.scss';

interface SearchProps {
    searchValue?: string;
    setSearchValue?: (value: string) => void; // setSearchValue принимает строку и не возвращает ничего
}

export const Search: React.FC<SearchProps> = ({ searchValue, setSearchValue }) => {
    const inputRef = React.useRef<HTMLInputElement>(null); // Явно указываем тип для useRef
    const { t } = useTranslation();
    const { theme } = useTheme();

    const onClickClear = () => {
        if (setSearchValue) {
            setSearchValue('');
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    return (
        <>
            <input
                ref={inputRef}
                value={searchValue || ''}
                onChange={(event) => setSearchValue && setSearchValue(event.target.value)} // Используем setSearchValue только если он определен
                type="text"
                className={classNames(cls.HeaderSearchInput, {}, [theme])}
                placeholder={t('Поиск пиццы...')}
            />
            {searchValue && (
                <Clear onClick={onClickClear} />
            )}
        </>
    );
};
