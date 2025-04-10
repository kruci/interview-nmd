"use client";
import { List } from "antd";
import { Book } from "../store/booksSlice";
import styles from "./BookListItem.module.css";
import { useCallback } from "react";

type BookListItemProps = {
  book: Book;
  onClick: (book: Book) => void;
};

export const BookListItem = ({ book, onClick }: BookListItemProps) => {
  const handleClick = useCallback(() => onClick(book), [book, onClick]);

  return (
    <List.Item className={styles.item} onClick={handleClick}>
      <List.Item.Meta
        title={book.title}
        description={book.author || "unknown"}
      />
    </List.Item>
  );
};
