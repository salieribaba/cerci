import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { Fragment, useContext } from "react";
import "./navigation.styles.scss";
import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebases/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
