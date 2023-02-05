import "./cart-dropdown.styles.scss";
import Button from "../buton/button-component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Button>Siparişi Ver</Button>
    </div>
  );
};

export default CartDropdown;
