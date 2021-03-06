import Head from "next/head";
import Layout from "../styles/components/layout";
import Nav from "../components/nav";
import Footer from "../components/footer";

export default function StaffBios() {
  return (
    <Layout>
      <Head>
        <title>Fluid Aesthetics, About</title>
      </Head>
      <Nav></Nav>
      <main>
        <h1>Staff Bios</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae voluptate blanditiis nam corporis rem maiores fugit? At,
            unde dolore. Quo fugit aut quas magni dolores, laborum quam quisquam
            consectetur inventore.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab magni
            consequatur laudantium, esse sit et! Cumque, natus placeat numquam,
            minus id deleniti omnis rerum fuga voluptatem fugit assumenda
            excepturi esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            eligendi aut natus quae at odio voluptas expedita, laborum sequi est
            nulla incidunt, molestiae et? Nisi aliquid dolore ipsum placeat id.
          </p>
        </article>
      </main>
      <Footer></Footer>
    </Layout>
  );
}
