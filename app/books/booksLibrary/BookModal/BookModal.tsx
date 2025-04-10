import { Descriptions, Modal } from "antd";
import { Book } from "../../store/booksSlice";
import { Picture } from "./Picture";
import { Description } from "./Description";
import { memo } from "react";

type BookModalProps = {
  book?: Book;
  onClose: () => void;
};

const BookModalInternal = ({ book, onClose }: BookModalProps) => {
  return (
    <Modal open={!!book} onCancel={onClose} closable footer={false}>
      <Descriptions
        bordered
        title="Book Info"
        column={1}
        items={[
          {
            label: "Title",
            children: book?.title,
          },
          {
            label: "Author",
            children: book?.author || "Not provided",
          },
          {
            label: "Description",
            children: <Description book={book} />,
          },
          {
            label: "Picture",
            children: <Picture book={book} />,
          },
        ]}
      />
    </Modal>
  );
};

export const BookModal = memo(BookModalInternal);
