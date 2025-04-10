import { RcFile } from "antd/es/upload";
import { useState, useEffect } from "react";
import { Book } from "../../store/booksSlice";

export const useBookPictureBlob = (book?: Book) => {
  const [imageBlobUrl, setImageBlobUrl] = useState("");

  useEffect(() => {
    if (!book?.picture) {
      return;
    }

    const originalFile = book.picture.originFileObj;
    const reader = new FileReader();
    reader.addEventListener("load", () =>
      setImageBlobUrl(reader.result as string)
    );
    reader.readAsDataURL(originalFile as RcFile);

    return () => {
      setImageBlobUrl("");
    };
  }, [book]);

  return imageBlobUrl;
};
