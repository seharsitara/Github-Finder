import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Footer from "./Footer";
import { GithubProvider } from "./GithubContext";

function App() {
  
  return (
    <GithubProvider>
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
      </GithubProvider>
  );
}

export default  App;