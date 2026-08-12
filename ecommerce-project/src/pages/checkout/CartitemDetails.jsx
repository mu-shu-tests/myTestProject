import formatCurrency from "../utils/money";
import axios from "axios";
import { useState } from "react";
function CartitemDetails({ cartItem, loadCart }) {
  const [update, setUpdate] = useState(false);
  const [quantity, setQuantity] = useState(cartItem.quantity);

  const showUpdateInput = async () => {
    if (update) {
      await axios.put(`api/cart-items/${cartItem.productId}`, {
        quantity: Number(quantity),
      });
      setUpdate(false);
      console.log(update);
    } else {
      setUpdate(true);
      console.log(update);
    }
    await loadCart();
  };

  const getInputQuantity = (event) => {
    setQuantity(event.target.value);
    console.log(quantity);
  };

  const keyboardEvent = (event) => {
    if (event.key === "Enter") {
      showUpdateInput();
    } else if (event.key === "Escape") {
      setQuantity(cartItem.quantity);
      setUpdate(false);
    }
  };

  const deleteCartItem = async () => {
    await axios.delete(`/api/cart-items/${cartItem.productId}`, {
      productId: cartItem.productId,
    });
    await loadCart();
  };

  return (
    <>
      <img className="product-image" src={cartItem.product.image} />

      <div className="cart-item-details">
        <div className="product-name">{cartItem.product.name}</div>
        <div className="product-price">
          {formatCurrency(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity:{" "}
            <input
              type="text"
              className={
                update ? "quantity-input" : "no-display-quantity-input"
              }
              value={quantity}
              onChange={getInputQuantity}
              onKeyDown={keyboardEvent}
            />
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span
            className="update-quantity-link link-primary"
            onClick={showUpdateInput}
          >
            Update
          </span>
          <span
            className="delete-quantity-link link-primary"
            onClick={deleteCartItem}
          >
            Delete
          </span>
        </div>
      </div>
    </>
  );
}

export default CartitemDetails;
