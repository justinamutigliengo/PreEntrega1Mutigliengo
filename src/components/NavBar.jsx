import CartWidget from "./CartWidget";
import logo from "../assets/logo.webp";
import ItemListContainer from "./ItemListContainer";

export default function NavBar() {
  const estilosLogo = {
    width: "130px",
    height: "60px",
  };

  return (
    <>
      <nav>
        <img style={estilosLogo} src={logo} alt="Logo" />
        <button>NEW IN</button>
        <button>WOMAN</button>
        <button>GIRLS</button>
        <button>HOME</button>
        <button>SALE</button>
        <CartWidget />
      </nav>
    </>
  );
}
