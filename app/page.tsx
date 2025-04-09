import styles from "./page.module.css";
import { AddBookSection } from "./books/addBookSection/AddBookSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.section}>
          <AddBookSection />
        </section>
        <section className={styles.section}>TODO</section>
      </main>
    </div>
  );
}
