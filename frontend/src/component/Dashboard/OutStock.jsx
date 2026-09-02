import React from 'react'
import StockCard from '../../UI/StockCard'
import Loading from '../../Pages/loading'
import useFetch from '../../Hooks/useFetch'
import { ArrowRightIcon } from "@animateicons/react/lucide";


const OutStock = () => {
  const { product, error, loading } = useFetch()
  
    if(loading){
      return <Loading/>
    }
  
    if(error){
      return <p>Error loading products</p>
    }
  return (
    <section className='flex flex-col justify-around items-start gap-3 bg-white shadow-md shadow-[#00000061] p-4 rounded-md'>
      
      <div className='flex justify-between items-center w-full'>
      <h2 className='text-xl font-bold text-gray-800'>Products Almost Out of Stock</h2>
      <p className='text-blue-800 text-sm cursor-pointer flex items-center gap-2'>View all <ArrowRightIcon size={15} duration={1} color="#2512af" /></p>
      </div>

      <div className='flex flex-wrap justify-around items-center'>
        {
product.filter((item) => item.stock < 10).map((item) => (
          <StockCard
            key={item.id}
            name={item.name}
            stock={item.stock}
            category={item.category}
            image={item.image}
          />
        ))
        }
      </div>


      
    </section>
  )
}

export default OutStock
