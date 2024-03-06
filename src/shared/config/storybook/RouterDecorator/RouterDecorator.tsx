import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Декоратор для оборачивания компонентов в BrowserRouter
export const RouterDecorator = (story: () => React.ReactNode) => (
    <BrowserRouter>{story()}</BrowserRouter>
);
