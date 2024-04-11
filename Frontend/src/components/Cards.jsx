import React from 'react'

const Cards = ({item}) => {
    // console.log(item)
  return (
    <div className='mt-4 my-3 p-3'>
    <div class="card w-92  bg-base-100 shadow-xl px-4 hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">
     {item.name}
      <div class="badge badge-secondary">{(item.categroy)}</div>
    </h2>
    <p>{item.title}</p>
    <div class="card-actions flex justify-between">
      <div class="badge badge-outline">${item.price}</div> 
      <div class=" cursor-pointer px-4 py-4 rounded-lg  border-[2px] badge badge-outline hover:bg-pink-500 hover:text-white   duration-200 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards