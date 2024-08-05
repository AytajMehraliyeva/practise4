import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useFormik } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import Helmet from 'react-helmet'
import MainContext from '../../../context';
import './Add.scss'
const Add = () => {
    const {  setError, data, setData,search,setSearch,searchItems} = useContext(MainContext)
    const formik = useFormik({
        initialValues: {
            name: '',
            img: '',
            price: '',
            desc: ''
        },
        onSubmit: async(values) => {
            if (!values.name || !values.price || !values.img || !values.desc) {
                toast.error("Please full fill out all fields")
                return
            }

            await axios.post('https://practise4-back.onrender.com/cards', values)
                .then((res) => {
                    setData([...data, res.data])
                    toast.success("Product added!")
                }).catch(err => {
                    toast.error("Product can't added")
                })
            formik.resetForm()
        }

    });

  



    const deleteHandle = (id) => {
        axios.delete(`https://practise4-back.onrender.com/cards/${id}`)
            .then(() => {
                const deleteAdd = data.filter(product => product._id !== id)
                setData(deleteAdd)
                toast.success("Product deleted")
            }).catch(err => {
                toast.error("An occures while deleting item")
                console.log(err)
            })
    }

    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <form className='formAdd' onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label> <br />
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder='Enter name ...'
                /> <br />
                <label htmlFor="price">Price</label> <br />
                <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                    placeholder='Enter price ...'
                /><br />
                <label htmlFor="img">Image</label>  <br />
                <input
                    id="img"
                    name="img"
                    type="img"
                    onChange={formik.handleChange}
                    value={formik.values.img}
                    placeholder='Enter img URL ...'
                /><br />
                <label htmlFor="desc">Description</label>  <br />
                <input
                    id="desc"
                    name="desc"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.desc}
                    placeholder='Enter description ...'
                /> <br />

                <button className='formAdd_btn' type="submit">Submit</button>
                <Toaster />
            </form>
            <input
        type="text"
        value={search}
        placeholder='Search product'
        onChange={(e) => setSearch(e.target.value)}
      />
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Deleted</th></tr>
                </thead>
                <tbody>
                    {searchItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><button className='deleteBtn' onClick={() => deleteHandle(item._id)}>Delete</button></td>
                            <Toaster />
                        </tr>

                    ))}

                </tbody>
            </table>
        </>
    )
}

export default Add