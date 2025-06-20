import DashboardLayout from '../layouts/DashboardLayout'
import DashboardHome from '../components/pages/DashboardHome'
import ManageProducts from '../components/pages/ManageProducts'

const DashRoutes = {
  path: '/dashboard',
  element: <DashboardLayout />,
  children: [
    { path: '/dashboard', element: <DashboardHome /> },
    { path: '/dashboard/manage-products', element: <ManageProducts /> }
  ]
}

export default DashRoutes
