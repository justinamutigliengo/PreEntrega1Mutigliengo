import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button className="navbar-brand">
              <Link to="/">
                <h1>OLIVIA</h1>
              </Link>
            </button>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/"}>Productos</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/category/tops"}>Tops</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="nav-link active" aria-current="page">
                    <Link to={"/category/pantalones"}>Pantalones</Link>
                  </button>
                </li>
              </ul>
            </div>
            <CartWidget />
          </div>
        </nav>
      </header>
    </>
  );
}
