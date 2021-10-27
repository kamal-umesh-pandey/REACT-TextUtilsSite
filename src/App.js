import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState, useEffect } from "react";
import Alert from "./components/Alert";
import Footer from "./components/Footer";
function App() {
  const [mode, setMode] = useState("light");
  const [headerText, setHeaderText] = useState("Try TextUtils - Word Counter, Character Counter, Remove extra spaces !!!");
  const [alert, setAlert] = useState(null);

  const showAlert = (alertType, alertMessage) => {
    setAlert({
      type: alertType,
      mssge: alertMessage,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#202124";
      document.getElementById("modeLabel").innerHTML = "Switch To Light Mode";
      showAlert("success", "switcht to dark mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("modeLabel").innerHTML = "Switch To Dark Mode";
      showAlert("success", "switch to light mode");
    }
  };

  return (
    <>
      <div>
        <Navbar
          navbarTiltle="Text Utils"
          about="About TextUtils"
          switchMode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <TextForm
          heading={headerText}
          switchMode={mode}
          showAlert={showAlert}
        />
      </div>
      <Footer switchMode={mode}></Footer>
    </>
  );
}

export default App;
