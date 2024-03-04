import React from 'react';
import './styles/index.scss';
import {Navbar} from 'widgets/Navbar';
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";


function App() {


    const {theme} = useTheme();



    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <div className="content-page">
            <AppRouter/>
            </div>
        </div>

    );
}

export default App;
