import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Abt from './components/Abt';
import TextForm from './components/TextForm';
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';


function App() {
  const [mode,setMode] = useState('light')
  const [alert,setAlert] = useState(null)

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#080436';
      showAlert("Dark mode Enabled", "success")
      document.title = 'TextUtils - DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enabled", "success")
      document.title = 'TextUtils - LightMode'
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About TextUtils"/>
        <Alert alert={alert} />
        <div className="container">
          {/* <Routes>
            <Route exact path='/Abt' element={<Abt/>}>
            </Route>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />}>
            </Route>
          </Routes> */}
          <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} />
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
