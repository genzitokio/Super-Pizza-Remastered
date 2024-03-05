import CartImage from 'shared/assets/icons/telejka.svg';
import Bucket from 'shared/assets/icons/bucket.svg';
import './CartPage.scss';

const CartPage = () =>

// const dispatch = useDispatch();
// const {totalPrice, items} = useSelector((state) => state.cart);
//
// const totalCount = items.reduce((sum, item) => sum + item.count, 0)
// const onClickClear = () => {
//     if (window.confirm('Очистить корзину?'))
//         dispatch(clearItems());
// };
//
//
// if (!totalPrice) {
//     return <EmptyCart/>
// }
    // eslint-disable-next-line implicit-arrow-linebreak
    (
        <div className="wrapper">
            <div className="cart">
                <div className="cart-header">
                    <div className="cart-header__left">
                        <CartImage />
                        <b className="cart-header__left-title">Корзина</b>
                    </div>
                    <div className="cart-header__right">
                        <Bucket />
                        <div
                            // onClick={onClickClear}
                            className="cart-header__right-title"
                        >
                            Очистить корзину
                        </div>
                    </div>
                </div>

                <div className="cart-content">
                    {/* {items.map(item => <CartItem key={item.id} {...item}/>)} */}
                </div>

                <div className="cart-sum">
                    <div className="cart-sum__left">
                        {/* Всего пицц <span className="cart-sum__left-span">{totalCount} шт </span> */}
                        Всего пицц
                        {' '}
                        <span className="cart-sum__left-span">123 шт </span>
                    </div>
                    <div className="cart-sum__right">

                        {/* Сумма заказа: <span className="cart-sum__right-span">{totalPrice} Р</span> */}
                        Сумма заказа:
                        {' '}
                        <span className="cart-sum__right-span">123 Р</span>
                    </div>
                </div>
                <div className="cart-nav">
                    <button type="button" className="cart-nav__backbutton">
                        Вернуться в магазин
                    </button>
                    <button type="button" className="cart-nav__nextbutton">
                        Оформить заказ
                    </button>

                </div>

            </div>

        </div>
    );
export default CartPage;
