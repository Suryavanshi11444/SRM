import HomeLayout from '../layouts/HomeLayout'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import Contact from '../components/pages/Contact'

const IndexRoutes = {
  path: '/',
  element: <HomeLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> }
  ]
}

export default IndexRoutes
