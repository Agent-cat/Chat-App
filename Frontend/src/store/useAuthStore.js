import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: "vishnu mandala",
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,
  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      set({ isCheckingAuth: false });
    } catch (error) {
      set({ authUser: null });
      console.log("erroe in authstore:"+error)
      set({ isCheckingAuth: false });
    }
  },
}));
