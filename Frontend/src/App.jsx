import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Navroutes from "./routes/Navroutes";
import { Loader } from "lucide-react";
import { useAuthStore } from "./store/useAuthStore";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth && !authUser)
    return (
     <div className="flex items-center justify-center h-screen">
             <Loader className="size-10 animate-spin" />
           </div>
    );

  return (
    <div>
      <Navbar />
      <Navroutes />
    </div>
  );
};

export default App;
