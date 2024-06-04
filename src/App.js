import React, { useState } from 'react';
import SearchBar from "./components/SearchBar";
import FetchImages from "./External/Api-request";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (input) => {
    const result = await FetchImages(input);
    setImages(result);
  };

  return (<div>
    <SearchBar onSubmit={handleSubmit} />
    <ImageList images={images} />
  </div>
  );
}

export default App;
