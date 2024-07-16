import posts from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

function HomePage() {
  const [search, setSearch] = useState("");

  const changeSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input onChange={changeSearch}></input>{" "}
      </div>
      <small>Ditermukan 0 data dengan pencarian kata {search}</small>
      {posts.map(({ title, tags, date }, index) => (
        <Article {...{ title, tags, date }} key={index} />
      ))}
    </>
  );
}

export default HomePage;
