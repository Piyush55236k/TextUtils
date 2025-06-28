import Navbar from './component/Navbar.js';
import Textform from './component/Textform.js';
import Footer from './component/footer.js';
import About from './component/About.js';
import Contact from './component/Contact.js';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <div className="page-container">
        <Navbar title="TextUtils" />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Textform heading="Enter your text" />} />
            <Route path="/Home" element={<Textform heading="Enter your text" />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
