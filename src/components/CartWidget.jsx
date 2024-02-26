import cart from "../assets/cart.png";

const CartWidget = () => {
  const EstilosCart = {
    width: "35px",
    height: "35px",
    display: "inline-block",
  };
  return (
    <>
      <img style={EstilosCart} src={cart} alt="cart-widget" />0
    </>
  );
};

export default CartWidget;
