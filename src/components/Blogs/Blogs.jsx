import React from 'react'
import Heading from '../Shared/Heading'
import img1 from '../../assets/blogs/blog-1.jpg'
import img2 from '../../assets/blogs/blog-2.jpg'
import img3 from '../../assets/blogs/blog-3.jpg'
const BlogData = [
    {
        id:1,
        title:"How to choose perfect smarwatch",
        subtilte:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image:img1,
        aosDelay:0
    },
    {
        id:2,
        title:"How to choose perfect gadget",
        subtilte:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image:img2,
        aosDelay:200
    },
    {
        id:3,
        title:"How to choose perfect VR headset",
        subtilte:"minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image:img3,
        aosDelay:400
    },
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
            {/* Header section */}
            <Heading title='Our Products' subtitle={"Explore Our Product"}/>
       
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7  '>

       {BlogData.map((data)=>(
           <div key={data.id} 
           data-aos="fade-up"
            data-aos-delay={data.aosDelay}>
            <div className='relative overflow-hidden rounded-2xl'>
                <img src={data.image} alt={data.title} className='w-full h-[220px] object-cover 
                hover:scale-105 duration-500
                '/>
                </div>
                <div className='space-y-2'>
                    <p className='text-xs text-gray-500 my-1'>{data.published}</p>
                <p className='font-bold line-clamp-1'>{data.title}</p>
                <p className='line-clamp-2 text-sm text-gray-600'>{data.subtilte}</p>
                </div>

        </div>
       ))}
        </div>
       </div>
      
    </div>
  )
}

export default Blogs
