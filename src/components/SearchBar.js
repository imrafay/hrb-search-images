import { useState } from "react";

function SearchBar({onSubmit}){
    const [input,setInput] = useState("");

    const onChangeInput = (event) => {
       setInput(event.target.value);
      };

      const onSubmitForm = (event) => {
        event.preventDefault();
        onSubmit(input);
      };

    return (<div>
        <section>
        <form  className="flex justify-center" onSubmit={onSubmitForm} id="searchForm">
            <input 
            placeholder="Search"
            className="border border-solid border-black rounded p-3 m-4" value={input} onChange={onChangeInput}/>
        </form>
        </section>
        
    </div>);
}

export default SearchBar;