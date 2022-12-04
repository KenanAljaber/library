import { Link } from "react-router-dom";
import "../Styles/book.css"
const Book = ({title,cover,author,id}) => {
    return ( 
        <div className="bookContainer">
            <div className="bookTitle">{title}</div>
            <div className="bookAuthor">Written by: {author}</div>
            <img src={cover}/>
            <Link to={`/book/${id}`} > <button className="details" >Details</button></Link>

        </div>

     );
}
 
export default Book;