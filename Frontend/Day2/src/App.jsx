import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landing from "./pages/home/landing"
import Dashboard from "./pages/admin/Dashboard"
import Profile from "./pages/admin/Profile"
import LoginForm from "./pages/auth/register"
import AuthForm from "./pages/auth/Authfrom"
import UserDashboard from "./pages/User/UserDashboard"
// import AuthForm from "./pages/auth/Authfrom"
// import Login from "./components/Login"
// import Header from "./pages/home/landing"
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/admin/dashboard" element={<Dashboard/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/user/dashboard" element={<UserDashboard/>}/> {/* 👈 Renders at /app/ */}
        <Route path="/profile" element={<Profile/>}/> 
        <Route path="/login" element={<AuthForm/>}/> 
        <Route path="/signup" element={<LoginForm/>}/> 
      </Routes>
    </BrowserRouter>
    {/* <Landing/> */}
    </>
  )
}

export default App
