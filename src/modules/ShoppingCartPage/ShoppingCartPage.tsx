import './ShoppingCartPage.scss'
import { CartItem } from '../../components/CartItem';
import Grid from '@mui/material/Grid';

export const ShoppingCartPage = () => {
  return (
      <div className="cart-page">
        <div className="cart-page__btn-back">
          <a
            href="*"
            className="cart-page__btn-back-text">Back</a>
        </div>
        <h1 className="cart-page__title">
          Cart
        </h1>
          <Grid container rowSpacing={1} columnSpacing={2}>
            <Grid item tablet={12} desktop={8} mobile={12}>
              <div className="cart-page__card-container">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />

              </div>
            </Grid>
            <Grid item tablet={12} desktop={4} mobile={12}>
              <div className="cart-page__checkout_block">
                <p className="cart-page__total-price">$2000</p>
                <p className="cart-page__total-count">Total for 3 items</p>
                <button
                  type="button"
                  className="cart-page__btn-checkout">
                    Checkout
                </button>
              </div>
            </Grid>
          </Grid>
      </div>
  );
};
