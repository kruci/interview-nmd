"use client";
import React, { useState } from "react";
import { Form, Input, Button, App } from "antd";
import { UploadImageFormItem } from "./UploadImageFormItem";
import styles from "./AddBookForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addBook, Book } from "../store/booksSlice";
import { RootState, StoreDispatch } from "../store/appStore";

export const AddBookForm = () => {
  const dispatch = useDispatch<StoreDispatch>();
  const books = useSelector((state: RootState) => state.books.books);
  const [isLoading, setIsLoading] = useState(false);

  const { message } = App.useApp();
  const [form] = Form.useForm<Book>();

  const validateTitleNotTaken = async (_: unknown, title: string) => {
    const isAvailable = books.every((book) => book.title !== title);
    if (!isAvailable) {
      return Promise.reject("This name is already taken.");
    }
    return Promise.resolve();
  };

  const handleSubmit = async (values: Book) => {
    setIsLoading(true);
    dispatch(addBook(values));
    /*
     We can handle networking in middleware, in which case it would return 
     promise, and we would show success only if request finished with success

     I personally would use purely react query for "books state" management instead
     of redux (Or plug react query to redux)
     */
    message.success("Book was added to the database");

    // Simulate network
    await new Promise((resolve) => setTimeout(resolve, 500));

    form.resetFields();
    setIsLoading(false);
  };

  const handleSubmitFailed = () => {
    setIsLoading(false);
    message.error("Cannot submit with invalid data");
  };

  return (
    <Form
      layout="vertical"
      onFinish={handleSubmit}
      onFinishFailed={handleSubmitFailed}
      autoComplete="off"
      form={form}
    >
      <Form.Item
        name="title"
        label="Title"
        rules={[
          { required: true, message: "This field is required!" },
          { validator: validateTitleNotTaken },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="author" label="Author">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea
          maxLength={300}
          rows={4}
          showCount
          className={styles.textArea}
        />
      </Form.Item>
      <Form.Item name="picture" label="Picture">
        <UploadImageFormItem />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.submit}
          loading={isLoading}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
