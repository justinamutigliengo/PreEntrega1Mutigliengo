import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <h1>OLIVIA</h1>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button>NEW IN</button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button>WOMAN</button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button>GIRLS</button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button>HOME</button>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    <button>SALE</button>
                  </a>
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
