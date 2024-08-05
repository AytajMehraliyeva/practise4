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
const[basket,setBasket]=useState(localStorage.getItem('basket')?JSON.parse(localStorage.getItem('basket')):[])  

const adToBasket=(product)=>{
  let target=basket.find((baskets)=>baskets.product._id===product._id)

  if(target){
    target.count+=1
    target.totalPrice=target.count*target.product.price
    setBasket([...basket])
    localStorage.setItem('basket',JSON.stringify([...basket]))
    alert('Product add basket')
    
  }else{
    const baskets={
      product:product,
      count:1,
      totalPrice:product.price
    }
    setBasket([...basket,baskets])
    localStorage.setItem('basket', JSON.stringify([...basket,baskets]))
    alert('Product add basket')
  }
}

const handleDeleteBasket=(id)=>{
  let deleteBasket=basket.find((item)=>item.product._id===id)
  basket.splice(basket.indexOf(deleteBasket),1)
  setBasket([...basket])
  localStorage.setItem('basket', JSON.stringify([...basket]))
}

const decreaseCounter=(baskets)=>{
  let target=basket.find((item)=>item.product._id===baskets.product._id)

  if(target.count>1){
    target.count-=1
    target.totalPrice=parseInt(target.count)*parseInt(target.product.price)
    setBasket([...basket])
    localStorage.setItem('basket', JSON.stringify([...basket]))
  }else{
    const updateBasket=basket.filter((item)=>item.product._id!==baskets.product._id)
    setBasket(updateBasket)
    localStorage.setItem('basket', JSON.stringify(updateBasket))
  }
}




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
    axios.get("https://practise4-back.onrender.com/cards").then(res => {
      setData(res.data)
      console.log(res.data)
    }).catch(err => {
      setError(err)
    })
  }, [])
  
const sortData=(product)=>{
  const sortPrice=[...data]
  sortPrice.sort((a,b)=>{
    const priceA=a.price
    const priceB=b.price
    return 'asc' ? priceA-priceB:priceB-priceA
  })
  setData(sortPrice)
  setSortType(product)
}
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
