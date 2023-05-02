import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Student from "../pages/Student";

function MyRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </>
  );
}

export default MyRouter;
