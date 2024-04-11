import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>

        <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you <span className='text-pink-500'>Here!:)</span></h1>
        <p className='mt-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est beatae, quibusdam dicta consectetur in sed repellendus iure accusantium consequuntur pariatur tenetur ipsum ratione ipsam maiores quos nobis placeat natus temporibus quaerat? Maiores tempore suscipit at vero illo nulla voluptate possimus maxime reprehenderit! Optio odio adipisci fugiat! Illum fugiat, ab modi placeat, aperiam at neque fugit error omnis esse veniam totam?

        </p>

        <Link to="/">
        
        <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
</Link>
      </div>
      
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards item ={item} key={item.id}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course