import { RouteProps } from 'react-router-dom';
import { CartPage } from 'pages/Cart';
import MainPage from 'pages/Main/ui/MainPage';
import { EmptyCart } from 'pages/EmptyCart';
import { NotFoundPage } from 'pages/NotFound';
import { CatalogPage } from 'pages/CatalogPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    CATALOG = 'catalog',
    CART = 'cart',
    EMPTY_CART = 'empty_cart',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.CATALOG]: '/catalog',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CART]: '/cart',
    [AppRoutes.EMPTY_CART]: '/empty-cart',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.CART]: {
        path: RoutePath.cart,
        element: <CartPage />,
    },
    [AppRoutes.EMPTY_CART]: {
        path: RoutePath.empty_cart,
        element: <EmptyCart />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
