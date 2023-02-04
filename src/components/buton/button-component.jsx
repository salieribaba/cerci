import "./button-styles.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

const Button = (props) => {
  const { buttonType, children, ...otherProps } = props;
  const buttonTypeClass = BUTTON_TYPE_CLASSES[buttonType] || "";
  return (
    <button className={`button-container ${buttonTypeClass}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
