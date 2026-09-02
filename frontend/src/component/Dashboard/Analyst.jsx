import React from 'react'
import { ShoppingBasketIcon } from "@animateicons/react/lucide";
import { ArrowRightIcon } from "@animateicons/react/lucide";
import { BatteryLowIcon } from "@animateicons/react/lucide";
import { BoxesIcon } from "@animateicons/react/lucide";
import { ChartColumnBigIcon } from "@animateicons/react/lucide";
import useFetch from '../../Hooks/useFetch';






const Analyst = () => {
    const { product  } = useFetch()

  const data = [
    {
      id: 1,
      title: "Total Products",
      number: product.length,
      icon: <ShoppingBasketIcon size={50} duration={1} color="#f45b48" />,
      link: "View all products",
      href: "#"
    },
    {
      id: 2,
      title: "Low Stock",
      number: product.filter((item) => item.stock < 10).length,
      icon: <BatteryLowIcon size={50} duration={1} color="#12af5e" />,
      link: "View low stock",
      href: "#"
    },
    {
      id: 3,
      title: "Categories",
      number: product.reduce((acc, item) => acc + (item.category ? 1 : 0), 0),
      icon: <BoxesIcon size={50} duration={1} color="#bd6c0f" />,
      link: "View categories",
      href: "#"
    },
    {
      id: 4,
      title: "Total Orders",
      number: 243,
      icon: <ChartColumnBigIcon size={50} duration={1} color="#0f97ff" />,
      link: "View total orders",
      href: "#"
    }
  ];

  return (
    <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4'>
      {data.map((item) => (
        <div key={item.id} className='flex flex-col sm:flex-row sm:justify-start sm:items-center gap-3 sm:gap-4 bg-white shadow-md shadow-[#00000061] p-3 sm:p-4 rounded-md'>
          <div className='bg-[#f1f1fe] rounded-md p-2 flex-shrink-0'>{item.icon}</div>

          <div className='flex flex-col justify-start items-start flex-grow'>
            <p className='text-lg sm:text-xl font-semibold text-gray-800'>{item.title}</p>
            <p className='text-2xl sm:text-3xl font-bold text-gray-900 my-1'>{item.number}</p>

            <a href={item.href} className='text-blue-600 text-sm sm:text-[15px] cursor-pointer flex items-center gap-1 hover:text-blue-700 transition-colors'>
              {item.link}
              <ArrowRightIcon size={10} duration={1} color="#2512af" />
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Analyst
