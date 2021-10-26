import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (alertType, alertMessage)=> {
    setAlert({
      type: alertType,
      mssge: alertMessage
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=> {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor  = '#202124';
      document.getElementById('modeLabel').innerHTML = "Switch To Light Mode";
      showAlert('success', 'switcht to dark mode');
    }else{
      setMode('light');
      document.body.style.backgroundColor  = 'white';
      document.getElementById('modeLabel').innerHTML = "Switch To Dark Mode";
      showAlert('success', 'switch to light mode');
    }
  }


  return (
    <>
    <Router>
    <Navbar navbarTiltle="Text Utils" about="About TextUtils" switchMode={mode} toggleMode={toggleMode}></Navbar>
    <Alert alert={alert} ></Alert>
    <Switch>
        <Route exact path="/about">
          <About switchMode={mode} />
        </Route>
        <Route exact path="/">
          <TextForm heading = "Enter The Text To Analyze Below !!!" switchMode={mode} showAlert={showAlert} />
        </Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
