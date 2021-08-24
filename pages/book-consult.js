import Head from "next/head";
import Layout from "../styles/components/layout";
import Link from "next/link";

export default function BookConsult() {
  return (
    <Layout className={Layout.container}>
      <Head>
        <title>Book A Consultation</title>
      </Head>
      <nav>
        <Link href="/">Home</Link>
      </nav>
      <main className={Layout.main}>
        <h1>Book a consultation</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          culpa distinctio non vitae iusto deleniti odit placeat? Cumque sint
          perspiciatis tempora repellat atque pariatur. Sapiente unde rem illum
          culpa dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          culpa distinctio non vitae iusto deleniti odit placeat? Cumque sint
          perspiciatis tempora repellat atque pariatur. Sapiente unde rem illum
          culpa dolorum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          culpa distinctio non vitae iusto deleniti odit placeat? Cumque sint
          perspiciatis tempora repellat atque pariatur. Sapiente unde rem illum
          culpa dolorum?
        </p>
      </main>
    </Layout>
  );
}
