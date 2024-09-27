import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider , Link , Router} from 'react-router-dom'

// COMPONENT
import Home from './component/Home.jsx'
import Product from './component/Product.jsx'
import Contact from './component/contact.jsx'
import Article from './component/article.jsx'
import Signin from './component/Signin.jsx'
import Login from './component/Login.jsx'
import Clothes from './component/Productcomponent/Clothes.jsx'
import Trousers from './component/Productcomponent/Trousers.jsx'
import Suit from './component/Productcomponent/Suit.jsx'
import Hat from './component/Productcomponent/Hat.jsx'
import Shoe from './component/Productcomponent/Shoe.jsx'
import Profile from './component/profile.jsx'
import Differencesandstrengths from './component/AboutUs/Differencesandstrengths.jsx'
import MisionVision from './component/AboutUs/MisionVision.jsx'
import History from './component/AboutUs/History.jsx'
import Chart from './component/Chart/Chart.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/Product',
    element: <Product/>,
  },
  {
    path: '/Clothes',
    element: <Clothes/>
  },
  {
    path: '/Trousers',
    element: <Trousers/>
  },
  {
    path: '/History',
    element: <History/>
  },
  {
    path: '/MisionVision',
    element: <MisionVision/>
  },
  {
    path: '/Contact',
    element: <Contact/>,
  },
  {
    path: '/Hat',
    element: <Hat/>,
  },
   {
    path: '/Article',
    element: <Article/>,
  },
  {
    path: '/Differencesandstrengths',
    element: <Differencesandstrengths/>,
  },
   {
    path: '/Login',
    element: <Login/>,
  },
   {
    path: '/Signin',
    element: <Signin/>,
  },
  {
    path: '/Suit',
    element: <Suit/>,
  },
  {
    path: '/Shoe',
    element: <Shoe/>,
  },
  {
    path: '/Profile',
    element: <Profile/>
  },
  {
    path: '/Chart',
    element: <Chart/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
