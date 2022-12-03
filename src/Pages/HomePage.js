import Book from "../Components/Book";
import { useAppContext } from "../Store/store";
import "../Styles/homePage.css"
const HomePage = () => {
    const store=useAppContext();

    return ( 
        <div className="grid">
            {
                store.items.map((it)=>{
                    return(
                        <Book key={it.id} title={it.title} cover={it.cover} author={it.author} id={it.id} />
                    );
                })
            }
        </div>

     );
}
 
export default HomePage;