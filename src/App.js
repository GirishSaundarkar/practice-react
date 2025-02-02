import Functional from "./components/Functional";
import Class from "./components/Class";
import DefaultExport from "./components/DefaultExport";
import { About, Contact } from "./components/NamedExport";

function App() {
  return (
    <>
      <Functional />
      <Class />
      <DefaultExport />
      <About />
      <Contact />
    </>
  );
}

export default App;
