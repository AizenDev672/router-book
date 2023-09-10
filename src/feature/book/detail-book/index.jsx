import { useParams } from "react-router-dom";
import { useFilters } from "../../hooks/useFilters";
import { DetailItem } from "../detail-item";

export function DetailBook() {
  const { id } = useParams();
  const { queryBook } = useFilters();

  const filteredBook = queryBook(id);
  return (
    <div>
      {filteredBook.map((book, index) => (
        <DetailItem key={index} item={book} />
      ))}
    </div>
  );
}
