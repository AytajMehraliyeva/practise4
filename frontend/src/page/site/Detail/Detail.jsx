import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Detail.scss'
import { Helmet } from 'react-helmet'
const Detail = () => {
    const [item, setItem] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get(`http://localhost:3030/cards/${id}`).then(res => {
            setItem(res.data)
        })
    }, [id])
  return (
    <>
    <Helmet>
      <title>Detail</title>
    </Helmet>
    <div className='detailCard'>

      <img src={item.img} alt="" />

      <div className='detailCardBody'>
      <h2>{item.name}</h2>
      <p>{item.desc}</p>
      </div>

    </div></>
  )
}

export default Detail