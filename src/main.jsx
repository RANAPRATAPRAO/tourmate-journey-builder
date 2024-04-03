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
import { Bihar_Places } from './states_India/Bihar.tsx'
import { Kerala_Places } from './states_India/Kerala.tsx'
import { GOA } from './states_India/Goa.tsx'
import {Laksh} from "./states_India/Lakhshadweep.tsx"
import { Karnataka_places } from './states_India/Karnataka.tsx'
import { UP } from './states_India/UP.tsx'
import { Tamilnadu_places } from './states_India/Tamilnadu.tsx'
import { KASHMIR } from './states_India/Kashmir.tsx'
import { LADAKH } from './states_India/Ladhakh.tsx'
import { Mumbai_places } from './states_India/mumbai.tsx'
import { ArtGalllery } from './pages/Art-Gallery.tsx'
import WeatherApp from './features/weather.jsx'




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
        path:"/Bihar",
        element:<Bihar_Places/>,
      },
      {
        path:"/Kerala",
        element:<Kerala_Places/>,
      },
      {
        path:"/Ladakh",
        element:<LADAKH/>,
      },
      {
        path:"/Mumbai",
        element:<Mumbai_places/>,
      },
      {
        path:"/Kashmir",
        element:<KASHMIR/>,
      },
      {
        path:"/Tamil Nadu",
        element:<Tamilnadu_places/>,
      },
      {
        path:"/Utter Pradesh",
        element:<UP/>,
      },
      {
        path:"/Karnataka",
        element:<Karnataka_places/>,
      },
      {
        path:"/Lakshadweep",
        element:<Laksh/>,
      },
      {
        path:"/Goa",
        element:<GOA/>,
      },
      {
        path:"/ArtGallery",
        element:<ArtGalllery/>,
      },
      {
        path:"/Weather",
        element:<WeatherApp/>,
      }
    ]
  }
])






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
