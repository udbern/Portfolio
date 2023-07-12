import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  Home from "./pages/Home"
import Contact from "./pages/Contact"
import  Navbar from "./component/Navbar"
import  Footer from "./component/Footer"
import Blog from "./pages/Blog"
import Error from "./pages/Error";
import Project from "./pages/Project";
import Blogpost from "./pages/Blogpost";


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/"element={<Home/>}></Route>
        <Route path="/blog"element={<Blog/>}></Route>
        <Route path="/Project"element={<Project/>}></Route>
        <Route path="/blog/:slug"element={<Blogpost/>}></Route>
        <Route path="/contact"element={<Contact/>}></Route>
        <Route path="*"element={<Error/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
