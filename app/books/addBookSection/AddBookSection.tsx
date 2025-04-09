"use client";
import { Typography } from "antd";
import { AddBookForm } from "./AddBookForm";

export const AddBookSection = () => {
  return (
    <div>
      <Typography.Title level={2}>Add a new book</Typography.Title>
      <AddBookForm />
    </div>
  );
};
