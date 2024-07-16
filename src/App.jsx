import "./App.css";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Article name="Mikhael" titles={["Reactjs", "Nextjs", "Nodejs"]} />
      <br />
      <Article name="Budi" titles={["vuejs", "Nuxtjs", "deno"]} />
    </div>
  );
}

export default App;
