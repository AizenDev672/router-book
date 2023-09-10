import { useParams } from "react-router-dom";
import { useFilters } from "../../hooks/useFilters";
import { FormAssign } from "../form-assign";
import "./assign.css";

export function AssignBook() {
  const { id } = useParams();
  const { queryBook } = useFilters();
  const filtered = queryBook(id);
  return (
    <div>
      {filtered.map((book, index) => (
        <div key={index} className="wrapper">
          <div className="wrapper-detail">
            <img src={book.photo} alt={book.title} />
            <div className="item-wrapper">
              <h1>{book.title}</h1>
              <small>{book.author}</small>
              <FormAssign book={book} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
