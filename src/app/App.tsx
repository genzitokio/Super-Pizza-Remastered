import React from 'react';
import './styles/index.scss';
import {Navbar} from 'widgets/Navbar';
import {AppRouter} from "app/providers/router/AppRouter";


function App() {

    return (
        <div>
            <Navbar/>
            <AppRouter/>
        </div>

    );
}

export default App;
