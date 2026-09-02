import { useState } from 'react'
import Searchbar from '../component/Dashboard/Searchbar'
import useFetch from '../Hooks/useFetch'
import Category from '../component/AllProduct/Category'
import Prodect from '../component/AllProduct/Prodect'
import Loading from './loading'

const AllProdects = () => {
  const { product, loading, error, refetch } = useFetch()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filteredProducts = selectedCategory === 'All'
    ? product
    : product.filter((item) => item.category === selectedCategory)

  if (loading) return <Loading />
  if (error) return <p className='p-6 text-red-600'>Unable to load products.</p>

  return (
    <main className='w-full p-4 pb-24 flex flex-col gap-4 md:ml-72 md:w-auto md:p-6 md:pb-6'>
      <Searchbar title="All Products"/>
      <Category
        products={product}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <Prodect products={filteredProducts} onProductDeleted={refetch} onProductEdited={refetch}/>
      
    </main>
  )
}

export default AllProdects
