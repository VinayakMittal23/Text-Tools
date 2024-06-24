import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Alert from "./components/Alert";

function App() {

//   const [alert, setAlert] = useState(null);

//   const showAlert = (message, type) => {
//     setAlert({
// msg: message,
// type: type
//     })
//   }

  return (
    <>
      <Navbar />
      {/* <Alert alert = {alert}/> */}
    
      <div className="container my-3">
        <TextForm heading="Enter text to analyse" />
      </div>
    </>
  );
}

export default App;
