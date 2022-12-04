
import "../Styles/search.css"
import close from "../Assets/close.png"
import { useRef, useState } from "react";

const Search = ({findItems,cancelSearch}) => {
    const inputRef=useRef(null);
   
        const [searching,isSearching]=useState(false);
        //whenever user is searching for something
        function handleChange(e){
            
            const text=e.target.value;
            if(text!== ""){
                    isSearching(true);
            }else{
                isSearching(false);
            }
            //find items is a method in HomePage component that will look for books taht match the test
            //and then it will update the list accordding to it 
            findItems(text);
        }
        
        //handle cancel search
        function handleOnClick(){
                inputRef.current.value="";
                cancelSearch();
                isSearching(false);
        }
    return ( 
        <div className="searchContainer">

        <input ref={inputRef} className="searchInput" type="text" placeholder="Search for a book by it's name or author's name" onChange={handleChange}/>
        {searching&&
        <img src={close} width="25px" onClick={handleOnClick}/>}
        </div>
     );
}
 
export default Search;