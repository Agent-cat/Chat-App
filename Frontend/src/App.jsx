import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Navroutes from "./routes/Navroutes";
import { Loader } from "lucide-react";
import { useAuthStore } from "./store/useAuthStore";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";
const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
const { theme } = useThemeStore();
  if (isCheckingAuth && !authUser)
    return (
     <div className="flex items-center justify-center h-screen">
             <Loader className="size-10 animate-spin" />
           </div>
    );

  return (
    <div data-theme={theme}>
      <Navbar />
      <Navroutes />
      <Toaster />
    </div>
  );
};

export default App;
