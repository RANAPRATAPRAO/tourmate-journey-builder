import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MovingCards } from './pages/MovingCards.tsx'
import { HeroSection } from './pages/HeroSection.tsx'
import { IconCards } from './pages/IconCards.tsx'
import { PlacesGrid } from './pages/PlacesGrid.tsx'
import { PopularDestinations } from './pages/PopularDestinations.tsx'
import { ArtGalllery } from './pages/Art-Gallery.tsx'
import { States_Places } from './subpages/States_Places.tsx'
import WeatherApp from "./features/weather.jsx"




const HomePage=()=>(
  <>
        <HeroSection/>
        <div id="MovingCards"><MovingCards/></div>
        <div id="features"><IconCards/></div>
        <div id="holiday"><PlacesGrid/></div>
        <PopularDestinations/>
  </>
);



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/TajMahal",
        element:<States_Places/>,
      },
      {
        path:"/Kerala",
        element:<States_Places/>,
      },
      {
        path:"/Goa",
        element:<States_Places/>,
      },
      {
        path:"/Mysore",
        element:<States_Places/>,
      },
      {
        path:"/Ranthambore",
        element:<States_Places/>,
      },
      {
        path:"/Darjeeling",
        element:<States_Places/>,
      },
      {
        path:"/Varansi",
        element:<States_Places/>,
      },
      {
        path:"/Jaipur",
        element:<States_Places/>,
      },
      {
        path:"/Agra",
        element:<States_Places/>,
      },
      {
        path:"/Weather",
        element:<WeatherApp/>
      }
      
      

    ]
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
