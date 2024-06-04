import SearchBar from "./components/SearchBar";
import FetchImages from "./External/Api-request";


function App() {
  const handleSubmit = (input) => {
    FetchImages(input);
  };

  return (<div>
    <SearchBar onSubmit={handleSubmit}/>
  </div>
  );
}

export default App;
