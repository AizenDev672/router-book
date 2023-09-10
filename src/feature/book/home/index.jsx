import { BookItems } from "../book-items";
import "./home.css";

export function Home({ books }) {
  return (
    <main className="books">
      <div className="gird-books">
        {books.map((book, index) => (
          <BookItems key={index} book={book} />
        ))}
      </div>
    </main>
  );
}
