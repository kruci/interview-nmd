import styles from "./page.module.css";
import { AddBookSection } from "./books/addBookSection/AddBookSection";
import { BookLibrarySection } from "./books/booksLibrary/BookLibrarySection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.section}>
          <AddBookSection />
        </section>
        <section className={styles.section}>
          <BookLibrarySection />
        </section>
      </main>
    </div>
  );
}
