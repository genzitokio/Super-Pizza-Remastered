import { RouteProps } from 'react-router-dom';
import { CartPage } from 'pages/Cart';
import MainPage from 'pages/Main/ui/MainPage';
import { EmptyCart } from 'pages/EmptyCart/ui/EmptyCart';

export enum AppRoutes {
    MAIN = 'main',
    CART = 'cart',
    EMPTY_CART = 'empty_cart',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CART]: '/cart',
    // последний
    [AppRoutes.EMPTY_CART]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <CartPage />,
    },
    [AppRoutes.EMPTY_CART]: {
        path: RoutePath.empty_cart,
        element: <EmptyCart />,
    },
};
