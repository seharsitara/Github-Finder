import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Footer";

function App() {
  
  return (
    
      <Router>
        <div  className="flex flex-col justify-between h-screen ">
      <Navbar></Navbar>


      <main>
        <Routes>
        <Route  path="/"  element={<Home/>}></Route>
         <Route path="/about"  element={<About/>}></Route>
       </Routes>
      </main>
      
      <Footer></Footer>
     </div>
      </Router>
  
  );
}

export default  App;