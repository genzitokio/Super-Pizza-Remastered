import { lazy } from 'react';

const EmptyCartAsync = lazy(() => import('./EmptyCart').then((module) => ({ default: module.EmptyCart })));

export default EmptyCartAsync;
