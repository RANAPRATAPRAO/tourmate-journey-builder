import React from "react";
import  {Navbar1}  from "./pages/Navbar1";
import Footer from "./pages/Footer";
import {Outlet} from 'react-router-dom';

function App(){
  return(
<div>
     <Navbar1/>
     <Outlet/>
     <Footer/>
     

    </div>
    
  )
}
export default App;