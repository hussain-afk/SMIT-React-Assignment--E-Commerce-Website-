import { createContext, useState } from "react";
import { handleGoogleAuth } from "../utils/Firebase";
export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [userImg, setUserImg] = useState(null);
  const [auth, setAuth] = useState("Sign In");
  const onGoogleClick = async () => {
    try {
      const userData = await handleGoogleAuth();
      setUserImg(userData.profilePic);
      setAuth("Sign Out");
    } catch (err) {
      alert("Google Sign-In Failed. Please try again.");
    }
  };

  return (
    <AuthContext.Provider value={{ userImg, auth, onGoogleClick }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
