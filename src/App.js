import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home from "./pages/Home"
import Contact from "./pages/Contact"
import  Navbar from "./component/Navbar"
import  Footer from "./component/Footer"
import Blog from "./pages/Blog"
import Project from "./pages/Project"
import Error from "./pages/Error";



function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/blog"element={<Blog/>}></Route>
        <Route path="/project"element={<Project/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="*"element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
