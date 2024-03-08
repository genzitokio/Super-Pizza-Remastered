import React from 'react';
import { useTranslation } from 'react-i18next';

export const CatalogPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Каталог')}
        </div>
    );
};
