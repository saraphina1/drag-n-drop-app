import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
// import AuthDetails from './components/AuthDetails';

function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Routes>
        <Route path="/"      element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
      {/* <AuthDetails/> */}
     </div>
     
  );
}


export default App;
