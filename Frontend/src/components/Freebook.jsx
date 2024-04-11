import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';




const Freebook = () => {
  // console.log(`Lists : ${}`)
  // list.map((elm)=>console.log(elm))

  const filterData=list.filter((data)=>{return data.category==="Free"}) // contains books which are free 

  // console.log(filterData)


  // setting:
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };





  return (
 <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='text-center text-xl pb-2 font-semibold'>Free Offered Courses</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam amet cumque odit nesciunt, rem voluptatem illo ducimus at molestiae corporis.</p>
      
      </div>
    
    <div className=''>
      <Slider {...settings}>
        {
          filterData.map((item)=>(
            <Cards item ={item} key={item.id}/>
          ))
        }
      </Slider>
    </div>
    </div>

    
 </>
  )
}

export default Freebook