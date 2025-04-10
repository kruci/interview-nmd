import { Descriptions, Image, Modal } from "antd";
import { Book } from "../store/booksSlice";
import { useMemo } from "react";
import { useBookPictureBlob } from "./useBookPictureBlob";

type BookModalProps = {
  book?: Book;
  onClose: () => void;
};

export const BookModal = ({ book, onClose }: BookModalProps) => {
  const imageBlobUrl = useBookPictureBlob(book);

  const renderedPicture = useMemo(() => {
    if (!book?.picture) {
      return <>No picture</>;
    }

    return <Image src={imageBlobUrl} alt="Book picture" />;
  }, [book?.picture, imageBlobUrl]);

  const renderedDescription = useMemo(() => {
    // More advanced version would be to parse the text and replace all links with <a> tags with e.g. remark
    if (book?.description?.includes("https://openlibrary.org")) {
      return (
        <a href={book.description} target="_blank">
          {book.description}
        </a>
      );
    }
    return <>{book?.description ?? ""}</>;
  }, [book?.description]);

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
            children: book?.author,
          },
          {
            label: "Description",
            children: renderedDescription,
          },
          {
            label: "Picture",
            children: renderedPicture,
          },
        ]}
      />
    </Modal>
  );
};
