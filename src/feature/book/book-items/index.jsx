import { Link } from "react-router-dom";
import { useList } from "../../hooks/list";
import { IconEyes, ClockIcon } from "./Icon";
import { IconPlus, RemoveIcon } from "./Icon";
import "./bookitems.css";

export function BookItems({ book }) {
  const { addToList, list, removeFromList } = useList();

  const checkBookInList = (book) => {
    return list.some((item) => item.id === book.id);
  };

  const isBookInList = checkBookInList(book);

  return (
    <>
      <article className="card-book">
        <img src={book.photo} alt={book.title} />
        <div>
          <strong>{book.title}</strong>
        </div>
        <div>
          <span className="author-book">{book.author}</span>
        </div>
        <div className="item-link">
          <Link to={`/book-views/${book.id}`} className="btn-plus link-btn">
            <IconEyes />
          </Link>
          <Link to={`/assign-book/${book.id}`} className="btn-clock">
            <ClockIcon />
          </Link>
          <button type="button" className="btn-plus" style={{ backgroundColor: isBookInList ? "#e63946" : "#003554" }} onClick={() => {
            isBookInList  ? removeFromList(book) : addToList(book)
          }}>
            { isBookInList ? ( <RemoveIcon /> ) : ( <IconPlus /> ) }
          </button>
        </div>
      </article>
    </>
  );
}
