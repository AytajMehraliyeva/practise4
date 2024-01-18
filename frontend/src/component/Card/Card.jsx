import React, { useContext } from 'react'
import './Card.scss'
import { FaHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import MainContext from '../../context';
import { Toaster } from 'react-hot-toast';
const Card = ({item,index}) => {
    const{addToWishlist}=useContext(MainContext)
  return (
    <div key={index} className='card'>
        <img src={item.img} alt="" />
        <div className='cardBody'>
        <p>{item.name}</p>
        <p><b>Price: </b> {item.price} Azn</p>
        <Link to={`/${item._id}`}><button className='detailBtn'>Detail</button></Link> <br />
       <FaHeart className='heart' onClick={() => { addToWishlist(item) }}/>
              <Toaster/>     
        </div>
    </div>
  )
}

export default Card