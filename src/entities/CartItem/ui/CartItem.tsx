// import {useDispatch} from "react-redux";
// import {addItem, minusItem, removeItem} from "../redux/slices/cartSlice";
import React from 'react';

interface CartItemProps {
    id: number;
    title: string;
    price: number;
    count: number;
    image: string;
}

export const CartItem: React.FC<CartItemProps> = ({id, title, price, count, image}) => {


    // const dispatch = useDispatch();
    //
    // const onClickPlus = () => {
    //     dispatch(addItem({
    //         id,
    //     }));
    // };
    // const onClickMinus = () => {
    //     dispatch(minusItem(id));
    // };
    //
    // const onClickRemove = () => {
    //     if (window.confirm('Ты действительно хочешь удалить товар?'))
    //         dispatch(removeItem(id));
    // };

    return (
        <>
            <div className="cart-content__item">
                <div className="cart-content__item-left">
                    <img className="cart-content__item-left-img" src={image} alt="pizza"/>
                    <div className="cart-content__item-left-name">
                        <div className="cart-content__item-left-title">{title}</div>
                        <div className="cart-content__item-left-subtitle">тонкое тесто, 26 см.</div>
                    </div>
                </div>
                <div className="cart-content__item-right">
                    <div className="cart-content__item-right-interactive">
                        <button
                            // onClick={onClickMinus}
                            className="cart-content__item-right-interactive-btn-decr">-
                        </button>
                        <div className="cart-content__item-right-interactive-value">{count}</div>
                        <button
                            // onClick={onClickPlus}
                            className="cart-content__item-right-interactive-btn-incr">+
                        </button>
                    </div>
                    <div className="cart-content__item-totalprice">{price * count} Р</div>
                    <button
                        // onClick={onClickRemove}
                        className="cart-content__item-interactive-btn-del">X
                    </button>
                </div>
            </div>
        </>
    )
}