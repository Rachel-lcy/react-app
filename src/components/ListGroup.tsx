function ListGroup() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  return (
    <>
      <h1> List </h1>
      {items.length === 0 ? <p>No item found </p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="List-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
