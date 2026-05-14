import { useState, useContext } from "react";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../components/AuthContext";

const AuthPage = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onGoogleClick } = useContext(AuthContext);
  console.log(onGoogleClick);

  const handleAuth = (e) => {
    e.preventDefault();
    const action = isLogin
      ? signInWithEmailAndPassword
      : createUserWithEmailAndPassword;

    action(auth, email, password)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };

  // The specific Google Handler
  const handleGoogleLogin = async () => {
    try {
      await onGoogleClick();
      navigate("/"); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#1e293b] border border-slate-700 rounded-3xl shadow-2xl overflow-hidden">
        {/* Toggle Header */}
        <div className="flex p-2 bg-slate-900/50">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-2xl transition-all ${
              isLogin
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-3 text-xs font-bold uppercase tracking-wider rounded-2xl transition-all ${
              !isLogin
                ? "bg-blue-600 text-white shadow-lg"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Sign Up
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              {isLogin ? "Welcome Back" : "Join Us"}
            </h2>
          </div>

          <form className="space-y-4" onSubmit={handleAuth}>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="beast@mode.com"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-500 uppercase ml-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg active:scale-95 transition-all mt-4"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase font-bold">
              <span className="px-3 bg-[#1e293b] text-slate-500">
                Secure Social Access
              </span>
            </div>
          </div>

          {/* GOOGLE BUTTON - Now using onGoogleClick */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full py-3.5 bg-white hover:bg-slate-100 rounded-xl flex items-center justify-center gap-3 text-slate-900 font-bold text-sm transition-all active:scale-95 shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
