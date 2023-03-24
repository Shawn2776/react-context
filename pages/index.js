import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { useContext } from "react";
import BlogContext from "../contexts/BlogContext";
import styles from "../styles/Home.module.css";

export default function Home() {
  const blogContext = useContext(BlogContext);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Blog</h1>
        <div>
          <p>
            {blogContext.posts.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
                <p>
                  <em>by: {post.author}</em>
                </p>
              </div>
            ))}
          </p>
        </div>
        <hr />
        <div>
          <p>
            <Link href="/About">
              <button>Test</button>
            </Link>
          </p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
