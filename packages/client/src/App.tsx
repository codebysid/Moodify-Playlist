import "./App.css";
import HowToUse from "./components/HowToUse";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import DisplayDemoExamples from "./components/DisplayDemoExamples";
import ContactDeveloper from "./components/Contact";
import BuiltWith from "./components/BuiltWith";

function App() {
  return (
    <div className=" flex flex-col lg:items-center py-20 gap-40 px-5 lg:gap-48 lg:px-10">
      <div className=" fixed top-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="flex items-end justify-center min-h-[60vh] lg:min-h-[55vh]">
        <Outlet />
      </div>
      <DisplayDemoExamples />
      <HowToUse />
      <BuiltWith />
      <ContactDeveloper />
    </div>
  );
}

export default App;
