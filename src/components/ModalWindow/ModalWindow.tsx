import './ModalWindow.scss';
import { Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { LocaleStorageContext } from "../Context";
import cart from '../../img/cart_icon.png';

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  countItems: number;
  totalCost: number;
};

export const ModalWindow: React.FC<Props> = ({ open, setOpen, countItems, totalCost }) => {
  const { cartItems, setCartItems } = useContext(LocaleStorageContext)

  const handleClose = () => {
    setCartItems([]);
    setOpen(false);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
    <Box className="order">
      <button
        className="order__btn-close"
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
          </li>
          ))}

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
          <span>Oops, your cart is empty!</span>
          <img src={cart} alt='cart_item'/>
        </div>
      </Typography>
    )}
    </Box>
  </Modal>
  )
}

