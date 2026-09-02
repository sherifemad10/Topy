import React from 'react'
import { ArrowRightIcon } from "@animateicons/react/lucide";
import Card from '../../UI/Card'
import useFetch from '../../Hooks/useFetch'
import Loading from '../../Pages/loading';


const LatestProducts = ({title, from, to}) => {
  const { product, error, loading } = useFetch()

  if(loading){
    return <Loading/>
  }

  if(error){
    return <p>Error loading products</p>
  }

  return (
    <section className='flex flex-col justify-start items-center gap-5 bg-white shadow-md shadow-[#00000061] p-3 rounded-md w-full'>
      
      <div className='flex justify-between items-center w-full'>
      <h3 className='text-2xl font-bold'>{title}</h3>

      <p className='text-blue-800 text-sm cursor-pointer flex items-center gap-2'>View all <ArrowRightIcon size={15} duration={1} color="#2512af" /></p>
      
      </div>

      {/* card */}
      <div className='flex flex-wrap justify-between items-center gap-2 w-full'>
      {product.slice(from, to).map((item) => (
        <Card
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
          timeAdd={item.createdAt}
        />
      ))}
      </div>
    </section>
  )
}

export default LatestProducts
