import "./ItemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <>
      <section>
        <h2 className="text-center">{greeting}</h2>
      </section>
    </>
  );
}
