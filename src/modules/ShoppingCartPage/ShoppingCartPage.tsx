import { useContext, useState } from 'react';
import './ShoppingCartPage.scss'
import Grid from '@mui/material/Grid';
import { CartItems } from '../../components/CartItems/CartItems';
import { LocaleStorageContext } from "../../components/Context";
import Box from '@mui/material/Box/Box';
import Modal from '@mui/material/Modal/Modal';
import Typography from '@mui/material/Typography/Typography';
import cart from '../../img/cart_icon.png';
import { Breadcrumbs } from '../Breadcrumbs';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #E2E6E9',
  boxShadow: 24,
  p: 4,
};

export const ShoppingCartPage: React.FC = () => {

  const { cartItems } = useContext(LocaleStorageContext);
  const { setCartItems } = useContext(LocaleStorageContext)
  const countItems = cartItems.reduce((a, {count}) => a + count, 0);
  const totalCost: number = cartItems.reduce((a, {good, count}) => a + good.price * count, 0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setCartItems([]);
    setOpen(false);
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
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <button
                  className="close__button"
                  type='button'
                  onClick={handleClose}>
                    ×
                  </button>
                  {countItems > 0
                  ? (
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    <span className="order__title">Your Order:</span>
                    <ul className="order__list">
                    {cartItems.map(cart => (
                      <li className="cart-page__total-count" key={cart.good.id}>
                        <p>{cart.good.name}</p>
                        <div>
                          <small>x</small>
                          <p>{cart.count}</p>
                        </div>
                      </li>))}

                    </ul>
                    <div className="order__summary">
                      <p className="cart-page__total-price">{`${totalCost}`}</p>
                      {countItems > 1 && (
                        <p className="cart-page__total-count">{`${countItems} items`}
                        </p>)
                      }
                    </div>

                  </Typography>
                  )
                : (
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    <div className="order__title-noitem">
                      <span>Oops, your cart is empty!
                      </span>
                      <img src={cart} alt='cart_item'>
                      </img>
                    </div>
                  </Typography>
                )}
                </Box>
              </Modal>
            </div>
          </Grid>
        </Grid>
    </div>
  );
};
