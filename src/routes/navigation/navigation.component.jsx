import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebases/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { CartContext } from "../../contexts/cart-context";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Mağaza
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutAuthUser}>
              Çıkış Yap
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Giriş Yap
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
