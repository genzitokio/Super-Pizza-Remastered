import React, {ChangeEventHandler, MouseEventHandler} from 'react';
import cls from './Switcher.module.scss'
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";

interface SwitcherProps {
    id?: string,
    checked?: boolean,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    labelLeft?: string,
    labelRight?: string,
    onClick?: MouseEventHandler<HTMLInputElement>;
}

const Switcher: React.FC<SwitcherProps> = (
    {
        id,
        checked,
        onChange,
        onClick,
        labelLeft,
        labelRight
    }) => {

    const {theme} = useTheme();

    return (
        <div
        >
            <input
                className={classNames(cls.SwitcherInput, {}, [theme])}
                type="checkbox"
                id={id}
                checked={checked}
                onChange={onChange}
            />
            <label
                className={classNames(cls.SwitcherLabel, {}, [theme])}
                htmlFor={id}>Toggle</label>
            <span
                className={classNames(cls.SwitcherLabelLeft, {}, [theme])}
            >{labelRight}</span>
            <span
                className={classNames(cls.SwitcherLabelRight, {}, [theme])}
            >{labelLeft}</span>
        </div>
    );
};

export default Switcher;