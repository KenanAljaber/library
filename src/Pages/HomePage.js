import { useEffect, useState } from "react";
import Book from "../Components/Book";
import Search from "../Components/Search";
import { useBook } from "../Hooks/useBook";
import { useAppContext } from "../Store/store";
import "../Styles/homePage.css"
const HomePage = () => {
    const store=useAppContext();
    const [books,setBooks]=useState(store.items);
   
    const[inputText,setInputText]=useState();
    const [googleSearchedBooks,setWordToSearch]= useBook(inputText);

    useEffect(()=>{
            setWordToSearch(inputText);
            
    },[inputText]);
  
    function findItems(bookTitke){
        if(bookTitke==""){
            setBooks(store.items);
        }else{
            setBooks(store.searchItems(bookTitke));
            setInputText(bookTitke);
            
            
        }
    }

    function cancelSearch(){
        setBooks(store.items);
    }
    return ( 
        <div>
            <Search findItems={findItems} cancelSearch={cancelSearch}/>
            <h2>Your books</h2>
            { books.length>0?
        <div className="grid">
            {
              books.map((it)=>{
                    return(
                        <Book key={it.id} title={it.title} cover={it.cover} author={it.author} id={it.id} />
                    );
                }) 
            }
        </div> : <h1 className="noResult">There is no result in your library</h1>
        }
        <h2>Google books</h2>
        {googleSearchedBooks && googleSearchedBooks.length>0? 
        <div className="grid">
        {
          googleSearchedBooks.map((it)=>{
                return(
                    <Book key={it.id} title={it.title} cover={it.cover} author={it.author} id={it.id} />
                );
            }) 
        }
    </div>
        : 
        <div>Did not find any books on google</div>}
        </div>

     );
}
 
export default HomePage;