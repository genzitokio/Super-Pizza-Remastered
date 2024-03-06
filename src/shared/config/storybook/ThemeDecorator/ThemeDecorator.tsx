import { Theme } from 'app/providers/ThemeProvider';
import React from 'react';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: React.ComponentType) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
