import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Store/store";
import "../Styles/details.css"

const BookDetail = ({ id }) => {
    const store = useAppContext();
    const [book, setBook] = useState(null);
    const params = useParams();
    useEffect(() => {
        setBook(store.getItem(params.bookId));
        console.log(book.completed);
    }, [book]);
    return (
        
        <div className="detailContainer">
           
            <img src={book?.cover}  className="detailsImg"/>
            { book?
            <div className="detailsInfo">
                <div className="detailsTitle">{book?.title }</div>
                <div className="detailsAuthor">Written by: {book?.author }</div>
                <div>
                <span className="detailsSpan">Intro : </span><br/>
                <div className="detailsReview">{book.intro? book.intro :"Intro is not available" }</div>
                <div>{ book.completed?"Completed.":"Not completed yet."}</div>
                <span className="detailsSpan">My Review: </span><br/>
                <div className="detailsReview">{book.review? book.review : "There is no review available"}</div>
                </div>

            </div> : "Loading"
        }

        </div> 
    );
}

export default BookDetail;