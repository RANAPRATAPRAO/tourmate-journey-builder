import React from "react";
import  {Navbar1}  from "./pages/Navbar1";
import Footer from "./pages/Footer";
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