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
        <form onSubmit={onSubmitForm}>
            <input value={input} onChange={onChangeInput}/>
        </form>
    </div>);
}

export default SearchBar;