import formatCurrency from "../utils/money";
import axios from "axios";
function CartitemDetails({ cartItem, loadCart }) {
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
          {"$" + formatCurrency(cartItem.product.priceCents)}
        </div>
        <div className="product-quantity">
          <span>
            Quantity: <input type="text" className="quantity-input" />
            <span className="quantity-label">{cartItem.quantity}</span>
          </span>
          <span className="update-quantity-link link-primary">Update</span>
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
