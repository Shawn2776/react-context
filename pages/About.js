import Link from "next/link";
import { useContext, useState } from "react";
import BlogContext from "../contexts/BlogContext";

function About() {
  const blogContext = useContext(BlogContext);
  const [name, setName] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    blogContext.setBlogContext(name);
    setName("");
  };

  return (
    <div>
      <Link href="/">
        <button>Home</button>
      </Link>
      <hr />
      <p>BlogContext Value: {blogContext.blogContext}</p>
      <form>
        <label for="name">Name:</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
          name="name"
          required
        />
        <button onClick={handleClick} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default About;
