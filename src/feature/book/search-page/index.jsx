import { Link } from "react-router-dom";

export function SearchPage() {
  const books = [
    "El fin de la infancia",
    "El hombre en el castillo",
    "Tierra contrafuturo",
  ];
  return (
    <div>
      <h1>Search Page</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {" "}
            <Link to={`/book-views/${book}`}>{book}</Link>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
