import { useAppContext } from "../Store/store";
const HomePage = () => {
    const store=useAppContext();

    return ( 
        <div>
            {
                store.items.map((it)=>{
                    return(
                        <div>{it.title}</div>
                    );
                })
            }
        </div>

     );
}
 
export default HomePage;