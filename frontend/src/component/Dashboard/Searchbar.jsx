import React from 'react'
import useSearch from '../../Hooks/useSearch';

const Searchbar = ({ title }) => {
  const { searchTerm, handleSearch, filteredProducts } = useSearch();
  return (
    <section className='flex flex-col justify-center items-end gap-4 w-full'>

      {/* search & notification & user */}

      <div className='flex justify-end items-center gap-3 flex-wrap w-full md:w-auto'>

        {/* search */}
        <div className='flex flex-col justify-start items-start gap-2 w-full md:w-auto relative'>
          <div className="relative w-full md:w-80" id="input">
            <input
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search..."
              className="block w-full text-sm h-12 px-4 pl-12 text-slate-900 bg-white rounded-lg border border-slate-200 appearance-none focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-200 hover:border-slate-300"
              id="floating_outlined"
              type="text"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
          </div>

          {/* search results */}
          <div className='flex flex-col justify-start accordion w-full md:w-80 absolute top-full left-0 z-20 mt-2'>
            {filteredProducts.length > 0 && (
              <div className='flex flex-col justify-start items-start gap-2 bg-white shadow-md shadow-[#00000061] p-3 rounded-md w-full border border-slate-100'>
                {filteredProducts.map((item) => (
                  <figure className='flex justify-start items-center gap-2 bg-white shadow-sm border border-slate-100 p-2 rounded-md w-full' key={item.id}>
                    <img src={item.image} alt={item.name} className='w-10 h-10 object-cover rounded-md flex-shrink-0' />
                    <div className='flex flex-col justify-start items-start gap-1 min-w-0'>
                      <h3 className='text-sm sm:text-md font-bold truncate w-full'>{item.name}</h3>
                      <p className='text-xs sm:text-sm text-[#00000067]'>${item.price}</p>
                    </div>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>

{/* notification */}
<button
  type="button"
  className="relative cursor-pointer p-3 bg-white text-black hover:bg-gray-300 active:brightness-90 shadow-2xl rounded-2xl transition-all ease-linear"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="currentColor"
    className="size-7"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
    ></path>
  </svg>
  <div
    className="bg-red-400 border-2 border-transparent rounded-full size-3.5 absolute -top-1 -right-1"
  >
    <div className="bg-red-400 rounded-full animate-ping size-full"></div>
  </div>
</button>

{/* user */}

<div className='w-[40px] h-[40px] rounded-full border-2 border-amber-50 bg-amber-500 relative flex items-center justify-center'>
  <p className='font-bold text-md cursor-pointer'>S</p>
</div>




      </div>

      {/* tilte of page */}

      <div className='flex flex-col justify-start items-start gap-1 w-full'>

        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-md text-[#00000076]'>Welcome back, Admin.</p>

      </div>
      
    </section>
  )
}

export default Searchbar
