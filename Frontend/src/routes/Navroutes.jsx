
import { Routes,Route } from "react-router-dom"
import Home from "../pages/Home"
import ProfilePage from "../components/ProfilePage"
import SettingsPage from "../components/SettingsPage"
import LoginPage from "../components/LoginPage"
import SignupPage from "../components/SignupPage"
const Navroutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
        <Route path="/profilr" element={<ProfilePage/>}/>
    </Routes>
  )
}

export default Navroutes
