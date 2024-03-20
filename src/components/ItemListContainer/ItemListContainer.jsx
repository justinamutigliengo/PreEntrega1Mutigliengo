import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import CategoryComponent from "../CategoryComponent/CategoryComponent";

export default function ItemListContainer({ greeting }) {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>
        <section>
          <h1>Página del ítem {id}</h1>
          <h2 className="text-center">{greeting}</h2>
        </section>
        <section>
          {products.map((product) => (
            <article key={product.id}>
              <h4>{product.title}</h4>
              <img src={product.image} alt={product.title} />
              <p> $ {product.price}</p>
              <button onClick={() => handleClick(product.id)}>
                Ver detalles
              </button>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}
