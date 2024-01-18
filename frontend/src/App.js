import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import MainContext from "./context";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast'
import axios from "axios";
const router = createBrowserRouter(Router)
function App() {
  const [data, setData] = useState([])
  const [orginal, setOrginal] = useState([])
  const[search,setSearch]=useState('')
  const [error, setError] = useState('')
  const [wishListItems, setWishlistItems] = useState(localStorage.getItem("wishlistItems") ? JSON.parse(localStorage.getItem("wishlistItems")) : [])
  const [sortType, setSortType] = useState('asc');
  
  const addToWishlist = (item) => {
    const target = wishListItems.find(wishlistItem => wishlistItem._id == item._id)
    
    
    if (target) {
       toast.error("Item is already in your wishlist")
    } else {
        setWishlistItems([...wishListItems, item])
        localStorage.setItem("wishlistItems", JSON.stringify([...wishListItems, item]))
        
    toast.success(`${item.name} added to your wishlist`);

    }
}
const removeFromWishlist = (id) => {
    const item = wishListItems.find(item => item._id == id)
    wishListItems.splice(wishListItems.indexOf(item), 1)
    setWishlistItems([...wishListItems])
    localStorage.setItem("wishlistItems", JSON.stringify([...wishListItems]))
    toast.success("Item deleted")
}

  const searchItems=data.filter(product=>product.name.toLowerCase().trim()
  .includes(search.toLowerCase().trim()))



  useEffect(() => {
    axios.get("http://localhost:3030/cards").then(res => {
      setData(res.data)
      console.log(res.data)
    }).catch(err => {
      setError(err)
    })
  }, [])
  
  const sortData = (type) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      const priceA = a.price;
      const priceB = b.price;
      return type === 'asc' ? priceA - priceB : priceB - priceA;
    });
    setData(sortedData);
    setSortType(type);
  };

  const sortByAsc = () => {
    const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
    setData(sortedData);
  };

  const sortByDesc = () => {
    const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
    setData(sortedData);
  };
 

  const items = {
    data, setData,
    orginal, setOrginal,
    error, setError,
    wishListItems, setWishlistItems,
    search,setSearch,
  sortType, setSortType,
  sortByDesc,sortByAsc ,sortData,
    addToWishlist, removeFromWishlist,
    searchItems
  }
  return (
    <MainContext.Provider value={items}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  );
}

export default App;
