import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [ispending, setispending] = useState("false");
  const history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setispending(true);
    //to make a post request
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      alert("New blog added");
      setispending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h1>Add a new blog</h1>
      <form onSubmit={handlesubmit}>
        <label>Blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <textarea
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></textarea>
        {!ispending && <button>Add blog</button>}
        {ispending && <button>Adding blog....</button>}
      </form>
    </div>
  );
};

export default Create;
