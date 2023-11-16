import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; 
import { useEffect } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
 import useAuth from './hooks/useAuth';

import { SortableUser } from './components/SortableUser';

 



function App() {

   const Navigate=useNavigate;
    const {user}=useAuth()

     useEffect(()=>{
       if (user){
         Navigate('/')
     } else{
        Navigate("/login")
      }
    
     },[user]);


  return (
    
    
    <div className="App">
      
      <Router>
      <Routes>
        
        
        <Route path='/' element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        </Routes>
      </Router>
      
      
     </div>
     
  );
  
}


export default App;
