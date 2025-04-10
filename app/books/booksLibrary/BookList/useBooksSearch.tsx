import { useSelector } from "react-redux";
import { RootState } from "../../store/appStore";
import { useMemo } from "react";
import Fuse from "fuse.js";

export const useBooksSearch = () => {
  const books = useSelector((state: RootState) => state.books.books);
  const searchValue = useSelector(
    (state: RootState) => state.bookSearch.searchValue
  );

  const fuseInstance = useMemo(() => {
    return new Fuse(books, { keys: ["title"], threshold: 0.3 });
  }, [books]);

  const filteredBooks = useMemo(() => {
    if (!searchValue) {
      return books;
    }
    return fuseInstance.search(searchValue).map((result) => result.item);
  }, [books, fuseInstance, searchValue]);

  return filteredBooks;
};
