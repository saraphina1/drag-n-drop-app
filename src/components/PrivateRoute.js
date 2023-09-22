import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute=()=> {
    
    let isAuthenticated= localStorage.getItem("isLogged")
  return (
    isAuthenticated === true ? <Navigate to="/login"/> :<Outlet/>
  )
}

export default PrivateRoute