import HomeLayout from '../layouts/HomeLayout';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';

const IndexRoutes = {
    path: '/',
    element: <HomeLayout />,
    children: [
        { path: '/', element: <About /> },
        { path: '/contact', element: <Contact /> },
    ]
};

export default IndexRoutes;
