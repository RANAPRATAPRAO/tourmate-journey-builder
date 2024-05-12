import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { MovingCards } from './pages/MovingCards.tsx'
import { HeroSection } from './pages/HeroSection.tsx'
import { IconCards } from './pages/IconCards.tsx'
import { PlacesGrid } from './pages/PlacesGrid.tsx'
import { PopularDestinations } from './pages/PopularDestinations.tsx'
import { Bihar_Places } from './states_India/Bihar.tsx'
import { Kerala_Places } from './states_India/Kerala.tsx'
import {  Goa_Places } from './states_India/Goa.tsx'
import {Laksh} from "./states_India/Lakhshadweep.tsx"
import { Karnataka_places } from './states_India/Karnataka.tsx'
import { UP } from './states_India/UP.tsx'
import { Tamilnadu_places } from './states_India/Tamilnadu.tsx'
import { KASHMIR } from './states_India/Kashmir.tsx'
import { LADAKH } from './states_India/Ladhakh.tsx'
import { Mumbai_places } from './states_India/mumbai.tsx'
import { ArtGalllery } from './pages/Art-Gallery.tsx'
import WeatherApp from './features/weather.jsx'
import { ParticularPlaces } from './subpages/ParticularPLaces.tsx'
import Mountains from './mountains/States_mountains.tsx'
import {Beaches1} from './beaches/States_beaches.tsx'
import IframeComponent from './map/Map.tsx'
import FoodPage from './restaurant/Food.tsx'
import HotelPage from './hotel/Hotel.tsx'


const HomePage=()=>(
  <>
        <HeroSection/>
        <div id="MovingCards"><MovingCards/></div>
        <div id="Features"><IconCards/></div>
        <div id="holiday"><PlacesGrid/></div>
        <div id="PopularDes"><PopularDestinations/></div>
        
  </>
);



// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <App/>,
//     children:[
//       {
//         path:"/",
//         element:<HomePage/>,
//       },
//       {
//         path:"/Bihar",
//         element:<Bihar_Places/>,
//       },
//       {
//         path:"/Karnataka",
//         element:<Karnataka_places/>,
//       },
//       {
//         path:"/Kerala",
//         element:<Kerala_Places/>,
//       },
//       {
//         path:"/Ladakh",
//         element:<LADAKH/>,
//       },
//       {
//         path:"/Mumbai",
//         element:<Mumbai_places/>,
//       },
//       {
//         path:"/Kashmir",
//         element:<KASHMIR/>,
//       },
//       {
//         path:"/Tamil Nadu",
//         element:<Tamilnadu_places/>,
//       },
//       {
//         path:"/Utter Pradesh",
//         element:<UP/>,
//       },
//       {
//         path:"/GOA",
//         element:<Goa_Places/>,
//       },
//       {
//         path:"/Laksh",
//         element:<Laksh/>,
//       },

//       {
//         path:"/Weather",
//         element:<WeatherApp/>,
//       },
//       {
//         path:"/ArtGallery",
//         element:<ArtGalllery/>
//       },
//       {
//         path:"/TajMahal",
//         element:<ParticularPlaces/>
//       },
//       {
//         path:"/mountain",
//         element:<Mountains/>
//       },
//       {
//         path:"/beach",
//         element:<Beaches1/>,
//       },
//       {
//         path:"/land",
//         element:<IframeComponent/>,
//       },
//       {
//         path:"/food",
//         element:<FoodPage/>
//       },
//       {
//         path:"/visitHotel",
//         element:<HotelPage/>
//       }
    


//     ]
//   }
// ])






// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}/>
//   </React.StrictMode>,
// )


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/Bihar" element={<Bihar_Places />} />
          <Route path="/Karnataka" element={<Karnataka_places />} />
          <Route path="/Kerala" element={<Kerala_Places />} />
          <Route path="/Ladakh" element={<LADAKH />} />
          <Route path="/Mumbai" element={<Mumbai_places />} />
          <Route path="/Kashmir" element={<KASHMIR />} />
          <Route path="/TamilNadu" element={<Tamilnadu_places />} />
          <Route path="/UtterPradesh" element={<UP />} />
          <Route path="/Goa" element={<Goa_Places />} />
          <Route path="/Lakshadweep" element={<Laksh />} />
          <Route path="/Weather" element={<WeatherApp />} />
          <Route path="/ArtGallery" element={<ArtGalllery />} />
          <Route path="/TajMahal" element={<ParticularPlaces />} />
          <Route path="/mountain" element={<Mountains />} />
          <Route path="/beach" element={<Beaches1 />} />
          <Route path="/land" element={<IframeComponent />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/visitHotel" element={<HotelPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);