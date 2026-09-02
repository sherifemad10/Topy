const formatDate = (value) => {
  if (!value) return 'Recently';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(date);
};

const Card = ({ timeAdd, image, price, name }) => {
  return (
    // <div classNameName='w-[250px] flex flex-col justify-start items-start gap-2 bg-white shadow-md shadow-[#0000004d] p-2 rounded-md cursor-pointer'>
    //   <figure classNameName='w-full rounded-b-md overflow-hidden'>
    //     <img src={image} alt={name} classNameName='w-full h-auto object-cover' />
    //   </figure>

    //   <div classNameName='flex flex-col items-start gap-1.5'>
    //     <h2 classNameName='text-xl font-bold'>{name}</h2>
    //     <p classNameName='text-2xl font-bold'>${price}</p>
    //     <p classNameName='text-sm text-[#00000067]'>Added {formatDate(timeAdd)}</p>
    //   </div>
    // </div>


<div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border-1 border-gray-200 mt-6 lg:mt-4  hover:cursor-pointer">
  <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
  <figure classNameName='w-full rounded-b-md overflow-hidden'>
         <img src={image} alt={name} classNameName='w-full h-auto object-cover' />
       </figure>
  </div>
  <div className="p-6">
    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {name}
    </h5>
    <p classNameName='text-2xl font-bold'>${price}</p>
  </div>
  <div className="p-6 pt-0">
<p classNameName='text-sm text-[#00000067]'>Added {formatDate(timeAdd)}</p>
  </div>
</div>
  )
}

export default Card
