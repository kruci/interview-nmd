"use client";
import { Typography } from "antd";
import { Search } from "./Search";
import { BooksList } from "./BooksList";

export const BookLibrarySection = () => {
  return (
    <div>
      <Typography.Title level={2}>Browse the book library</Typography.Title>
      <Search />
      <BooksList />
    </div>
  );
};
