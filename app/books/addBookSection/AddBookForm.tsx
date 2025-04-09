/**
 * Antd chained components name (e.g. `Form.Item`) do not work with next app router
 *
 * See https://ant.design/docs/react/use-with-next
 * See https://github.com/ant-design/ant-design-examples/blob/main/examples/with-nextjs-app-router-inline-style/src/app/with-sub-components/page.tsx
 */
"use client";
import React from "react";
import { Form, Input, Button, App, UploadFile } from "antd";
import { UploadImageFormItem } from "./UploadImageFormItem";
import styles from "./AddBookForm.module.css";

type BookInfo = {
    name: string
    author ?: string
    description?: string
    picture ?: UploadFile
}

export const AddBookForm = () => {
  const { message } = App.useApp();
  const [form] = Form.useForm<BookInfo>();

  const onFinish = (values: BookInfo) => {
    console.log("Success", values);
    message.success("Book was added to the database");
  };

  return (
    <Form layout="vertical" onFinish={onFinish} autoComplete="off" form={form}>
      <Form.Item
        name="title"
        label="Title"
        rules={[{ required: true, message: "This field is required!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="author" label="Author">
        <Input />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea maxLength={300} rows={4} showCount />
      </Form.Item>
      <Form.Item name="picture" label="Picture">
        <UploadImageFormItem />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.submit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
