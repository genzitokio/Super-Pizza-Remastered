import React from "react";
import Clear from 'shared/assets/icons/clear.svg'
interface SearchProps {
    searchValue?: string;
    setSearchValue?: (value: string) => void; // setSearchValue принимает строку и не возвращает ничего
}

export const Search: React.FC<SearchProps> = ({searchValue, setSearchValue}) => {
    const inputRef = React.useRef<HTMLInputElement>(null); // Явно указываем тип для useRef


    const onClickClear = () => {
        if (setSearchValue) {
            setSearchValue('');
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }

    return (
        <div className="header__search-container">
            <input
                ref={inputRef}
                value={searchValue || ''}
                onChange={(event) => setSearchValue && setSearchValue(event.target.value)} // Используем setSearchValue только если он определен
                type="text"
                className="header__search-input"
                placeholder="Поиск пиццы..."
            />
            {searchValue && (
                <Clear onClick={onClickClear}/>
            )}
        </div>
    );
};
