import { useState } from "react";
import SearchBar from "./components/SearchBar";
function App() {
  const [searchText,setSearchText] = useState('');

  const handleSubmit = (input) => {
    setSearchText(input);
  };

  return (<div>
    <SearchBar onSubmit={handleSubmit}/>
    <h1>{searchText}</h1>
  </div>
  );
}

export default App;
