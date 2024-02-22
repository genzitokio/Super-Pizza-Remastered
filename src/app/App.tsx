import React from 'react';
import './styles/index.scss';
import {Navbar} from 'widgets/Navbar';
import {Route, Routes} from "react-router-dom";
import {EmptyCart} from "pages/EmptyCart/ui/EmptyCart";
import CartPage from "pages/Cart/ui/CartPage";
import MainPage from "pages/Main/ui/MainPage";


function App() {

    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="*" element={<EmptyCart/>}/>
                <Route path="/cart" element={<CartPage/>}/>
            </Routes>
        </div>

    );
}

export default App;
