import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
// import AuthDetails from './components/AuthDetails';

function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Routes>
        <Route element={<PrivateRoute/>}>
        <Route path="/" exact element={<Home/>}/>  
        </Route>
        
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
      {/* <AuthDetails/> */}
     </div>
     
  );
}


export default App;
