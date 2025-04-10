import { Book } from "../../store/booksSlice";

type DescriptionProps = {
  book?: Book;
};

export const Description = ({ book }: DescriptionProps) => {
  /**
   * More advanced version would be to parse the text and replace all links
   * with <a> tags with e.g. remark
   */
  if (book?.description?.includes("https://openlibrary.org")) {
    return (
      <a href={book.description} target="_blank">
        {book.description}
      </a>
    );
  }

  return <>{book?.description ?? "Not provided"}</>;
};
