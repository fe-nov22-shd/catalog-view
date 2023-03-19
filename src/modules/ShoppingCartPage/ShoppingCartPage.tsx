import { useContext } from 'react';
import './ShoppingCartPage.scss'
import { CartItem } from '../../components/CartItem';
import Grid from '@mui/material/Grid';

import { LocaleStorageContext } from "../../components/Context";

export const ShoppingCartPage: React.FC = () => {

  // const [countEachGood, setCountEachGood] = useState([])


  // const handlerCounter = (goodId: number) => {
  //   let good = countEachGood.find(({ id }) => id === goodId)
  //   if (!good) {
  //     good = {
  //       id: goodId,
  //       count: 1,
  //     }
  //     setCountEachGood([...good])
  //     return;
  //   }
  //   good.count++;
  //   setCountEachGood([...good])
  //   return;
  // }
  const { cartItems } = useContext(LocaleStorageContext);
  const countItems = cartItems.length;
  const totalCost: number = cartItems.reduce((a, b) => a + b.price, 0);

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
            {countItems
            ? (
                <div className="cart-page__card-container">
                    {cartItems.map(good => (
                      <CartItem key={good.id} good={good} />
                    ))}
                </div>
            ) : (
              <p>Cart is empty</p>
            )
            }

            </Grid>
            <Grid item tablet={12} desktop={4} mobile={12}>
              <div className="cart-page__checkout_block">
                <p className="cart-page__total-price">{totalCost}</p>
                {countItems > 1 && (
                  <p className="cart-page__total-count">{`Total for ${countItems} items`}</p>
                )}

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
