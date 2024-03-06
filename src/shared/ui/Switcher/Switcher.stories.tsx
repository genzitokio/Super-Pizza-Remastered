import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Switcher, SwitcherProps } from './Switcher';

// Определение метаданных для Storybook
const meta: Meta<SwitcherProps> = {
    title: 'Example/Switcher', // Заголовок категории историй
    component: Switcher, // Указание компонента для метаданных
    parameters: {
        layout: 'centered', // Центрирование компонента в канве Storybook
    },
    argTypes: {
        checked: { control: 'boolean' }, // Определение аргументов для управления в Storybook
        labelLeft: { control: 'text' },
        labelRight: { control: 'text' },
    },
};

export default meta;

// Тип Story, который принимает аргументы типа SwitcherProps
type StoryType = Story<SwitcherProps>;

// Описание стори для компонента Switcher по умолчанию
export const Default: StoryType = (args) => <Switcher {...args} />;
Default.args = {
    labelLeft: 'On', // Задание значения по умолчанию для левой метки
    labelRight: 'Off', // Задание значения по умолчанию для правой метки
};

// Описание стори для компонента Switcher с включенным состоянием
export const Checked: StoryType = (args) => <Switcher {...args} />;
Checked.args = {
    checked: true, // Задание значения по умолчанию для включенного состояния
    labelLeft: 'On', // Задание значения по умолчанию для левой метки
    labelRight: 'Off', // Задание значения по умолчанию для правой метки
};

// Описание стори для компонента Switcher с настраиваемыми метками
export const CustomLabels: StoryType = (args) => <Switcher {...args} />;
CustomLabels.args = {
    labelLeft: 'Yes', // Задание пользовательской левой метки
    labelRight: 'No', // Задание пользовательской правой метки
};
