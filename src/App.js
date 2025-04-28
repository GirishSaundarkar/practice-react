// import Functional from "./components/Functional";
// import Class from "./components/Class";
// import DefaultExport from "./components/DefaultExport";
// import { About, Contact } from "./components/NamedExport";
// import Inline from "./components/Inline";
// import Internal from "./components/Internal1";
// import External from "./components/External";
// import './static/css/adhyayan.css';
// import Images from "./components/Images";
// import State from "./components/State";
// import ClassState from "./components/ClassState";
// import FunctionalProps from "./components/FunctionalProps";
// import ClassCounter from "./components/ClassCounter";
// import FunctionalCounter from "./components/FunctionalCounter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/layout/NavBar'
import Retrieve from "./components/pages/user/Retrieve"
import Add from "./components/pages/user/Add"
import Home from "./components/pages/Home"
import About from "./components/pages/About"
import Contact from "./components/pages/Contact"
import Update from "./components/pages/user/Update";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      {/* <Functional />
      <Class />
      <DefaultExport />
      <About />
      <Contact /> */}
      {/* types of styling in React -- inline, internal, external */}
      {/* <Inline />
      <Internal />
      <External />
      <Images />
      <State /> */}
      {/* props -- they are used to pass data from parent to child components
      here props is color in ClassState component   */}
      {/* <ClassState color="red" />
      <FunctionalProps name="Vinay" />
      <ClassCounter />
      <FunctionalCounter /> */}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/retrieve" element={<Retrieve />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
