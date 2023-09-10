import { Link } from "react-router-dom";
import { IconEyes, ClockIcon } from "./Icon";
import "./bookitems.css";

export function BookItems({ book }) {
  return (
    <return>
      <article className="card-book">
        <img src={book.photo} alt={book.title} />
        <div>
          <strong>{book.title}</strong>
        </div>
        <div>
          <span>{book.author}</span>
        </div>
        <div className="item-link">
          <Link to={`/book-views/${book.id}`} className="btn-plus link-btn">
            <IconEyes />
          </Link>
          <Link to={`/assign-book/${book.id}`} className="btn-clock">
            <ClockIcon />
          </Link>
        </div>
      </article>
    </return>
  );
}
