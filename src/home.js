import Bloglist from "./blog-list";
import useFetch from "./usefetch";

const Home = () => {
  const { data, ispending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="homepage">
      <h1>Welcome to the blog page</h1>
      <br />
      {error && <div>{error}</div>}
      {ispending && <div>Loading......</div>}
      {data && <Bloglist blogs={data} title="All blogs" />}
    </div>
  );
};
/*  {blogs && < Bloglist blogs={blogs} title="All blogs" handledelete={handledelete}/>} 
    if the left hand side of && is null it doesnt bother the right hand side and dont go to bloglist.js file 
    if left one is true only then it will give the output of right side*/
export default Home;
