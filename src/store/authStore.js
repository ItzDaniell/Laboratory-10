import { create } from "zustand";
import axios from "axios";

const useAuthStore = create((set) => ({
  user: null,
  isAutenticated: false,

  login: async (username, password) => {
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username,
        password,
      });

      const user = response.data;

      set({
        user,
        isAuthenticated: true,
      });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  },

}));

export default useAuthStore;