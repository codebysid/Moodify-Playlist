import "./App.css";
import HowToUse from "./components/HowToUse";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import DisplayDemoExamples from "./components/DisplayDemoExamples";
import ContactDeveloper from "./components/Contact";

function App() {
  return (
    <div className=" flex flex-col lg:items-center min-h-screen py-20 gap-40 px-5 lg:gap-80 lg:px-80">
      <div className=" lg:fixed lg:top-0 w-full z-50">
        <Navbar />
      </div>
      <div className=" lg:flex items-center justify-center min-h-[25vh] lg:min-h-[83vh]">
        <Outlet />
      </div>
      <HowToUse />
      <DisplayDemoExamples />
      <ContactDeveloper />
    </div>
  );
}

export default App;
