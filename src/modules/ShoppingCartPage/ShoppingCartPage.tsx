import { useContext, useState } from 'react';
import './ShoppingCartPage.scss'
import Grid from '@mui/material/Grid';
import { CartItems } from '../../components/CartItems/CartItems';
import { LocaleStorageContext } from "../../components/Context";
import { Link } from 'react-router-dom';
import { ModalWindow } from '../../components/ModalWindow';

export const ShoppingCartPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { cartItems } = useContext(LocaleStorageContext);
  const countItems = cartItems.reduce((a, {count}) => a + count, 0);
  const totalCost: number = cartItems.reduce((a, {good, count}) => a + good.price * count, 0);

  const handleOpen = () => {
    setOpen(true);
  }

  return (
    <div className="cart-page">
      <div className="cart-page__btn-back">
        <Link
          to="/"
          className="cart-page__btn-back-text">Back</Link>
      </div>
      <h1 className="cart-page__title">
        Cart
      </h1>

        <Grid container rowSpacing={1} columnSpacing={2}>
          <Grid item tablet={12} desktop={8} mobile={12}>
          {countItems
          ? (
              <div className="cart-page__card-container">
                  {cartItems.map(({good, count}) => (
                    <CartItems key={good.id} good={good} count={count} />
                  ))}
              </div>
          ) : (
            <p className="cart-page__no-items">Cart is empty</p>
          )
          }
          </Grid>
          <Grid item tablet={12} desktop={4} mobile={12}>
            <div className="cart-page__checkout_block">
              <p className="cart-page__total-price">{totalCost}</p>
              {countItems > 1 && (
                <p className="cart-page__total-count">{`Total for ${countItems} items`}</p>
              )}
              <button  className="cart-page__btn-checkout" onClick={handleOpen}>Checkout</button>
              <ModalWindow open={open} setOpen={setOpen} countItems={countItems} totalCost={totalCost}/>
            </div>
          </Grid>
        </Grid>
    </div>
  );
};
