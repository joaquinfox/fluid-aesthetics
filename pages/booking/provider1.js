import Head from "next/head";
import Layout from "../../styles/components/layout";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import styles from "../../styles/components/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function provider1() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Provider 1</title>
      </Head>
      <Nav></Nav>
      <main className={Layout.main}>
        <h1>Booking</h1>
        <h4>
          You are scheduling a consultation with <span>Provider 1</span>
        </h4>
        <article>
          <button>
            <a
              target="_blank" rel='noreferrer'
              href="https://adgmp.myaestheticrecord.com/book/appointments?user_id=OWDE7KxgQlVJdEp1o95RB13aw0m6Le"
            >
              <h4>New Patients</h4>
              <p>
                Lorem ipsum, dolor sitesse rem et laborum magnam, porro tempore
                voluptatem? Molestias!&rarr;
              </p>
            </a>
          </button>
        </article>
        <article>
          <button>
            <a target="_blank" rel='noreferrer' href="https://adgmp.myaestheticrecord.com/book/appointments?user_id=OWDE7KxgQlVJdEp1o95RB13aw0m6Le">
              <h4>Shorter Consultations</h4>
              <p>
                Lorem ipsum, dolor sitesse rem et laborum magnam, porro tempore
                voluptatem? Molestias!&rarr;
              </p>
            </a>
          </button>
        </article>
        <article>
          <button>
            <a
              target="_blank" rel='noreferrer'
              href="https://adgmp.myaestheticrecord.com/book/appointments?user_id=OWDE7KxgQlVJdEp1o95RB13aw0m6Le"
            >
              <h4>Option Three</h4>
              <p>
                Lorem ipsum, dolor sitesse rem et laborum magnam, porro tempore
                voluptatem? Molestias!&rarr;
              </p>
            </a>
          </button>
        </article>
      </main>
      <Footer></Footer>
      <style jsx>{`
        button {
          background: none;
          outline: none;
          border: none;
        }

        @media screen and (max-width: 600px) {
          article > button:hover {
            color: #0070f3;
          }
        }
      `}</style>
    </Layout>
  );
}
