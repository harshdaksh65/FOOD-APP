import React, { useState } from 'react'
import { assets } from '../assets/assets.js'
import axios from 'axios';

const Add= ()=> {
    const url = 'http://localhost:3000';

    const[image,setimage] =useState(null);
    const[data , setdata] = useState({
        name:'',
        description:'',
        category:'Salad',
        price:''
    });

    const onchangehandler = (event)=>{
        const name = event.target.name 
        const value = event.target.value
        setdata({...data,[name]:value})
    }

    const submitHandler = async (event)=>{
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('name',data.name)
        formdata.append('description',data.description)
        formdata.append('category',data.category)
        formdata.append('price',data.price)
        formdata.append('image',image)
        const response = await axios.post(`${url}/api/Food/add`, formdata);
        if(response.data.success) {
            // alert('Food Added Successfully')
            setdata({
                name:'',
                description:'',
                category:'Salad',
                price:''
            })
            setimage(null)
        }
        else {
            // alert('Error Occurred')
        }
    }

  return (
    <div className='w-[70%] m-auto text-lg mt-18 ml-14'>
        <h1 className='text-4xl font-bold'>Add Food</h1>
        <form onSubmit={submitHandler} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
                <p className='font-semibold'>Upload Image</p>
                <label htmlFor="image">
                    <img className='w-[120px]' src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
                </label>
                <input onChange={(e)=>setimage(e.target.files[0])} type="file" id='image' hidden required />
            </div>
            <div className='flex flex-col gap-4 w-[40%]'>
                <p className='font-semibold'>Product Name</p>
                <input onChange={onchangehandler} value={data.name} name='name' className='px-3 py-1' type="text" id='name' placeholder="Type here" required />
            </div>
            <div className='flex flex-col gap-4 w-[40%]'>
                <p className='font-semibold'>Description</p>
                <textarea onChange={onchangehandler} name='description' value={data.description} className='px-3 py-1' id='description' rows="4" placeholder="description" required />
            </div>
            <div className='flex gap-8 w-[40%]'>
                <div className='flex flex-col gap-4 w-[40%]'>
                    <p className='font-semibold'>Category</p>
                    <select onChange={onchangehandler} name='category' className='px-3 py-1' id='category'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="sandwich">sandwich</option>
                        <option value="cake">cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="pasta">pasta</option>
                        <option value="Noodels">Noodels</option>
                    </select>
                </div>
                <div className='flex flex-col gap-4 w-[40%]'>
                    <p  className='font-semibold'>Price</p>
                    <input onChange={onchangehandler} value={data.price} name='price' className='px-3 py-1' type="number" id='price' placeholder="$price" required />
                </div>
            </div>
            <button className='border w-[40%] bg-red-400 rounded-lg text-white font-bold cursor-pointer' type='submit'>Add Food</button>
          
        </form>
    </div>
    
  )
}

export default Add