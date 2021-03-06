import Head from "next/head";
import styles from "../styles/components/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fluid Aesthetics</title>
        <meta name="description" content="fluidaesthetics, injectibles, cosmetics, beauty, botox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fluid <a>Aesthetics</a>
        </h1>

        <div className={styles.grid}>
          <article className={styles.card}>
            <Link href="/about">
              <a>
                <h2 className={styles.title}>About Fluid Aesthetics&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet con p
            </p>
          </article>
          <article className={styles.card}>
            <Link href="/book-consult">
              <a>
                <h2 className={styles.title}>Book a consultation&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>bcaecati doloribus.</p>
          </article>
          <article className={styles.card}>
            <Link href="/staff-bios">
              <a>
                <h2 className={styles.title}>Our team&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>
              {" "}
              Loantium rerum ullam dicta provident repellat.
            </p>
          </article>
          <article className={styles.card}>
            <Link href="/faq">
              <a>
                <h2 className={styles.title}>FAQ&rarr;</h2>
              </a>
            </Link>
            <p className={styles.description}>
              Londerit, illum quos tempora vel cum minima!
            </p>
          </article>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          Built by
          <a
            href="https://joaquinfox.github.io/profile//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joaquin
          </a>
        </p>
      </footer>
    </div>
  );
}
