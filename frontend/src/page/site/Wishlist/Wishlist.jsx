import React, { useContext } from 'react'
import MainContext from '../../../context'
import { Toaster } from 'react-hot-toast'
import './Wishlist.scss'
import { Helmet } from 'react-helmet'

const Wishlist = () => {
    const { wishListItems, removeFromWishlist } = useContext(MainContext)
    return (
      <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
        <table className='wishTable'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {wishListItems?.map((item, index)=>(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price} Azn</td>
                <td><button className='deleteBtn' onClick={()=>removeFromWishlist(item._id)}>X</button></td>
                 <Toaster/>
                 </tr>
           
            ))}
          </tbody>
        </table></>
    )
}

export default Wishlist