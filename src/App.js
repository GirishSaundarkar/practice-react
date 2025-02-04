import Functional from "./components/Functional";
import Class from "./components/Class";
import DefaultExport from "./components/DefaultExport";
import { About, Contact } from "./components/NamedExport";
import Inline from "./components/Inline";
import Internal from "./components/Internal1";
import External from "./components/External";
import './static/css/adhyayan.css';
import Images from "./components/Images";
import State from "./components/State";
import ClassState from "./components/ClassState";
import FunctionalProps from "./components/FunctionalProps";
import ClassCounter from "./components/ClassCounter";
import FunctionalCounter from "./components/FunctionalCounter";
import { createContext } from "react";
import A from "./components/A";
import B from "./components/B";
import C from "./components/C";


export let contextObj = createContext();

function App() {
  return (
    <>
      <Functional />
      <Class />
      <DefaultExport />
      <About />
      <Contact />
      {/* types of styling in React -- inline, internal, external */}
      <Inline />
      <Internal />
      <External />
      <Images />
      <State />
      {/* props -- they are used to pass data from parent to child components
      here props is color in ClassState component   */}
      <ClassState color="red" />
      <FunctionalProps name="Vinay" />
      <ClassCounter />
      <FunctionalCounter />
      {/* here we have use useContext hook in which we showed that value is accessible in any level of components */}
      <contextObj.Provider value="color : red">
        <A />
        <B />
        <C />
      </contextObj.Provider>
    </>
  );
}

export default App;
