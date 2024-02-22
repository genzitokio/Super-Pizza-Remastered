import React from "react";
import cls from './EmptyCart.module.scss'

export function EmptyCart() {
    return (<div className="empty">
        <div className="empty-inner">
            <h1 className="empty-inner__title">Корзина пустая 😕</h1>
            <h2 className="empty-inner__subtitle">Вы нищеброд? <br/>Оформите хотя бы одну пиццу.</h2>
            <img src="./images/emptycart.png" alt="logo" className="empty-inner__img"/>
        </div>
        <div className="empty-buttons">
            <button className="empty-buttons__back">Вернуться назад</button>
            <button className="empty-buttons__repeat">Повторить прошлый заказ</button>
        </div>
    </div>)
}