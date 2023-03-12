//import logo from './logo.svg';
import './App.css';
import Navbar from './componenets/Navbar';
import TextForm from './componenets/TextForm'
import { useState } from 'react';
import Alert from './componenets/Alert';
// import About from './componenets/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {

  const [mode, setmode] = useState("light")
  const [tmode, settmode] = useState("dark")
  const [alert, setalert] = useState(null)

  const toggleColor = (value) => {
    console.log(value);
    setmode(value);
    document.body.style.backgroundColor = mode;
  }

  const showalert = (text, type) => {
    setalert({
      msg: text,
      type: type
    }
    )

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  const toggle = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.background = '#2e2e2e'
      settmode('light')
      showalert("enabled Darkmode", "success")
    }
    else {
      setmode('light')
      document.body.style.background = 'white'
      settmode('dark')
      showalert("Disabled Darkmode", "success")
    }
  }

  return (
    <>

       {/* <Router> */}
        <Navbar title="Amal" lin="About" tmode={tmode} mode={mode} toggle={toggle} toggleColor={toggleColor} />
        <Alert alert={alert}/>
        <div /*className="container my-3"*/>
          {/* <Switch> */}
            {/* <Route path="/about"> */}
              {/* <About /> */}
            {/* </Route> */}
            {/* <Route path="/"> */}
              <TextForm tmode={tmode} mode={mode} text="Enter text to analyze" />
            {/* </Route> */}
          {/* </Switch> */}
        </div>
      {/* </Router> */}

    </>
  );
}

export default App;