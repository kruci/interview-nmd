import { useSelector } from "react-redux";
import { RootState } from "../store/appStore";

export const BooksList = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return books.map((book) => <div key={book.title}>{book.title}</div>);
};
