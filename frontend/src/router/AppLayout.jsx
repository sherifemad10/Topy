import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

export default AppLayout
