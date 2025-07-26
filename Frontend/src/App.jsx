import { useEffect } from "react";
import Navbar from "./components/Navbar"
import Navroutes from "./routes/Navroutes"
import { useAuthStore } from "./store/useAuthStore"
const App = () => {
  const {authUser,checkAuth,isCheckingAuth}=useAuthStore();
  useEffect(()=>{
    console.log(checkAuth())
  },[checkAuth])
  
  if(isCheckingAuth && !authUser)return(
    <div>
      <h1>Loading...</h1>
    </div>
  )

  

  return (
    <div>
     <Navbar/>
     <Navroutes/>
    </div>
  )
}

export default App
