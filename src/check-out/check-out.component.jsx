import { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import "./check-out.styles.scss";
import CheckoutItem from "../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Ürün</span>
        </div>
        <div className="header-block">
          <span>Açıklama</span>
        </div>
        <div className="header-block">
          <span>Miktar</span>
        </div>
        <div className="header-block">
          <span>Fiyat</span>
        </div>
        <div className="header-block">
          <span>Sil</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">Toplam: ₺{cartTotal}</div>
    </div>
  );
};

export default Checkout;
