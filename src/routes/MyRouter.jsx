import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Student from "../pages/Student";
import StudentCreate from "../pages/StudentCreate";

function MyRouter() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/student" element={<Student />} />
        <Route path="/student/create" element={<StudentCreate />} />
      </Routes>
    </>
  );
}

export default MyRouter;
