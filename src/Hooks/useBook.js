import { useEffect, useState } from "react"
import { useAppContext } from "../Store/store";

export const useBook = (keyWord) => {

    const [searchText,setSearchText]=useState(keyWord);
    const [books,setBooks]=useState();
    const store=useAppContext();
    useEffect(()=>{
        loadBooks(searchText);
        console.log("called");

    },[searchText]);

    function test(txt){
        setSearchText(txt);
    }
    async function loadBooks(keyWord){
        keyWord= !keyWord? "syria" : keyWord;
        console.log("here",keyWord);
        const resp= await fetch(`${process.env.REACT_APP_BOOK_URL}q=${keyWord}&key=${process.env.REACT_APP_BOOK_KEY}`);
        setTimeout(async ()=>{
                const data = await resp.json();
                
                const filterdData=filterApiData(data.items);
                setBooks(filterdData);
                store.setGoogleItems(filterdData);
               // console.log(filterdData);
               
        },1500);
    }

    function filterApiData(data){
            const arr=data.reduce((accum,actual)=>{
                
                const actualData=actual.volumeInfo;
                const currentBook= {
                    id: crypto.randomUUID(),
                    title: actualData.title,
                    author: actualData.authors ? actualData.authors : actualData.publisher,
                    cover: actualData.imageLinks.thumbnail,
                    intro: actualData.description,
                };
                accum.push(currentBook);
                return accum;
            },[]);
            return arr;
    }

    return [books,test];
    
}
 
