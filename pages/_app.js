import { useState, createContext } from "react";
import BlogContext from "../contexts/BlogContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Woohoo",
      content: "It's the end of the world",
      author: "keith",
    },
    {
      id: 2,
      title: "Let's Get it!",
      content: "And I feel fine",
      author: "shawn",
    },
  ]);

  const addPost = (title, content) => {
    const newPost = { title, content };
    setPosts([...posts, newPost]);
  };

  const removePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  const value = {
    posts,
    addPost,
    removePost,
  };

  return (
    <BlogContext.Provider value={{ posts, setPosts, value }}>
      <Component {...pageProps} />
    </BlogContext.Provider>
  );
}

export default MyApp;
