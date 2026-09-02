const StockCard = ({ name, stock, category, image }) => {
  return (
    <div className='flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 bg-white shadow-md hover:shadow-lg p-4 sm:p-6 rounded-lg transition-shadow duration-300 border border-gray-100'>
      {/* Product Image */}
      <figure className='flex-shrink-0'>
        <img 
          src={image}
          alt={name}
          className='w-20 h-20 sm:w-32 sm:h-32 object-cover rounded-lg shadow-sm' 
        />
      </figure>

      {/* Product Details */}
      <div className='flex-grow w-full'>
        <h3 className='text-lg sm:text-xl font-bold text-gray-800 mb-1'>{name}</h3>
        <p className='text-sm text-gray-600 mb-1'>Category: <span className='font-semibold text-gray-700'>{category}</span></p>
        <p className='text-sm text-gray-600 mb-3'>Stock: <span className='font-bold text-red-600'>{stock} units</span></p>
        
        {/* Stock Progress Bar */}
        <div className='flex items-center gap-3'>
          <div className='flex-grow bg-gray-200 rounded-full h-2.5 overflow-hidden'>
            <div className='bg-gradient-to-r from-red-500 to-red-600 h-2.5 rounded-full transition-all duration-300' style={{ width: `${(stock / 10) * 100}%` }}></div>
          </div>
          <span className='text-sm font-semibold text-red-600 whitespace-nowrap'>{Math.round((stock / 10) * 100)}%</span>
        </div>
        <p className='text-xs text-gray-500 mt-2'>Low stock alert</p>
      </div>
      
    </div>
  )
}

export default StockCard
