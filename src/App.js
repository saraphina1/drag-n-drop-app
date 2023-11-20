import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
 



 



function App() {

  //  const Navigate=useNavigate;
  //   const {user}=useAuth()

  //    useEffect(()=>{
  //      if (user){
  //        Navigate('/')
  //    } else{
  //       Navigate("/login")
  //     }
    
  //    },[user]);


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
