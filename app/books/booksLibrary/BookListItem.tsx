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

  // Cannot use antd typography ellipsis as it causes lag
  const renderWithEllipsis = useCallback(
    (value: string) => <span className={styles.ellipsis}>{value}</span>,
    []
  );

  return (
    <List.Item className={styles.item} onClick={handleClick}>
      <List.Item.Meta
        title={renderWithEllipsis(book.title)}
        description={renderWithEllipsis(book.author || "Not provided")}
      />
    </List.Item>
  );
};
