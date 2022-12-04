import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
  items: [],
  foundItems: [],
  createItem: (item) => {},
  getItem: (id) => {},
  updateItem: (item) => {},
  searchItems: (nmae)=>{},
  setGoogleItems: (googleItems)=>{},
});

export default function Store({ children }) {
  const [items, setItems] = useState([
   
  ]);
  const [foundItems,setFoundItems]=useState([]);

  function searchItems(name){
   
    const filterdItems= items.filter((it)=>it.title.toLowerCase ().includes(name.toLowerCase ()) ||
     it.author.toLowerCase ().includes(name.toLowerCase ()) );
    return filterdItems;

  }

  function setGoogleItems(newItems){
    const temp =[...newItems];
    
    setFoundItems(temp);
    console.log(foundItems,"setting google items");
   
  }

  function createItem(item) {
    const temp = [...items];
    temp.unshift(item);
    setItems([...temp]);
  }

  function getItem(id) {
    const localItem=items.find((item) => item.id === id);
   const googleItem=foundItems.find((item) => item.id === id);
    const item =  localItem? localItem : googleItem;
    
    
    return item;
  }

  function updateItem(item) {
    const index = items.findIndex((i) => i.id === item.id);

    const temp = [...items];

    temp[index] = { ...item };

    return true;
  }

  return (
    <AppContext.Provider
      value={{
        items,
        foundItems,
        createItem,
        getItem,
        updateItem,
        searchItems,
        setGoogleItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}