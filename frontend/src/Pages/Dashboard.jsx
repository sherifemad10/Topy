import Searchbar from '../component/Dashboard/Searchbar'
import Analyst from '../component/Dashboard/Analyst'
import LatestProducts from '../component/Dashboard/LatestProducts'
import OutStock from '../component/Dashboard/OutStock'


const Dashboard = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
          {/* <Navbar/> */}

          <main className='w-full p-4 pb-24 flex flex-col gap-4 md:ml-72 md:w-auto md:p-6 md:pb-6'>
            <Searchbar title="Dashboard"/>
            <Analyst/>
            <LatestProducts title="Latest Products" from={0} to={3}/>
            <LatestProducts title="Popular Products" from={3} to={6}/>
            <OutStock/>
          </main>

    </div>
  )
}

export default Dashboard
