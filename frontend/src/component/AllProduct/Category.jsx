const Category = ({ products, selectedCategory, onCategoryChange }) => {
  const categories = ['All', ...new Set(products.map((item) => item.category))]

  return (
    <section className='flex justify-between items-center gap-2 p-2 mt-4'>
      <ul className='flex flex-wrap justify-start items-center gap-2 w-full'>
        {categories.map((category) => (
          <li key={category}>
            <button
              type='button'
              onClick={() => onCategoryChange(category)}
              className={`rounded-md px-4 py-2 transition duration-300 ${selectedCategory === category
                ? 'bg-orange-500 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-orange-100'
                }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Category
