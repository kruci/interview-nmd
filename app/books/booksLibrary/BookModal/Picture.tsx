import { Image } from "antd";
import { Book } from "../../store/booksSlice";
import { useBookPictureBlob } from "./useBookPictureBlob";

type PictureProps = {
  book?: Book;
};

export const Picture = ({ book }: PictureProps) => {
  const imageBlobUrl = useBookPictureBlob(book);

  if (!book?.picture) {
    return <>Not provided</>;
  }

  /**
   * If we got here, it means that we have the file, but
   * we might wait for the imageBlobUrl to be created, in which case
   * we should show loader
   *
   * Will add if I will have time
   */
  return <Image src={imageBlobUrl} alt="Book picture" />;
};
