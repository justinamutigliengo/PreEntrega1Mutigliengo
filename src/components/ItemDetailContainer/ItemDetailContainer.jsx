import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../asyncMock";

export default function ItemDetailContainer() {
  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);
  return (
    <>
      <div>
        <h1>Single Product {prodId}</h1>
        <h3>Nombre: {product.title}</h3>
        <img src={product.image} alt={product.title} />
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>$ {product.price}</p>
      </div>
    </>
  );
}
