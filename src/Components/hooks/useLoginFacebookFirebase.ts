import { create } from "zustand";

interface LoginFacebookFirebase {
  isLoginFacebook: boolean;
  onLogin: () => void;
  onLogout: () => void;
}
const useLoginFacebookFirebase = create<LoginFacebookFirebase>((set) => ({
  isLoginFacebook: false,
  onLogin: () => set({ isLoginFacebook: true }),
  onLogout: () => set({ isLoginFacebook: false }),
}));

export default useLoginFacebookFirebase;
