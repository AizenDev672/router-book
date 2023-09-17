import { BookItems } from "../book-items";
import { SearchBook } from "../search-book";
import "./home.css";

export function Home({ books }) {
  return (
    <main className="books">
      <SearchBook />
      <div className="gird-books">
        {books.map((book, index) => (
          <BookItems key={index} book={book} />
        ))}
      </div>
    </main>
  );
}
