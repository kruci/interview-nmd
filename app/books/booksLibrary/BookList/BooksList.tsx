import { BookListItem } from "./BookListItem";
import { List } from "antd";
import styles from "./BookList.module.css";
import { useCallback, useState } from "react";
import { Book } from "../../store/booksSlice";
import { BookModal } from "../BookModal/BookModal";
import VirtualList from "rc-virtual-list";
import { useBooksSearch } from "./useBooksSearch";

export const BooksList = () => {
  const [selectedBook, setSelectedBook] = useState<Book>();
  const books = useBooksSearch();

  const handleBookClick = useCallback((book: Book) => {
    setSelectedBook(book);
  }, []);

  const handleModalClose = useCallback(() => {
    setSelectedBook(undefined);
  }, []);

  return (
    <>
      <List className={styles.list}>
        <VirtualList
          data={books}
          height={450}
          itemHeight={73}
          itemKey="title"
          // We would load more data from API here
          //onScroll={...}
        >
          {(book: Book) => (
            <BookListItem
              book={book}
              key={book.title}
              onClick={handleBookClick}
            />
          )}
        </VirtualList>
      </List>
      <BookModal book={selectedBook} onClose={handleModalClose} />
    </>
  );
};
