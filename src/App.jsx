import React from "react";
import { PlacesGrid } from "./pages/PlacesGrid";
import  {Navbar1}  from "./pages/Navbar1";
import Footer from "./pages/Footer";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { PopularDestinations } from "./pages/PopularDestinations";
import { Globe } from "./pages/Globe";
import { IconCards } from "./pages/IconCards";
import { States_Places } from "./subpages/States_Places";
import { MovingCards } from "./pages/MovingCards";
import { ArtGalllery } from "./pages/Art-Gallery";
import { HeroSection } from "./pages/HeroSection";
import {Outlet} from 'react-router-dom';

function App(){
  return(
<>
     <Navbar1/>
    <Outlet/>
    <div id="Footer"><Footer/></div>

    </>
    
  )
}
export default App;