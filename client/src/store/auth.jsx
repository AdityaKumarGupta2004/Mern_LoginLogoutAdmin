import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading,setLoading] = useState(true);
  const [services, setservices] = useState([]); // ✅ FIXED: Initialized as an array
  const authorizationToken= `Bearer ${token}`;
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const Logoutuser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  let isLoggedin = !!token;

  // Fetch user data with JWT authentication
  const userAuthentication = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data.userData);
        setUser(data.userData);
        setLoading(false);
      }else{
        setLoading(false);
        console.err(`Error while fetching the Data`);
      }
    } catch (err) {
      console.error("Error fetching user data:", err);
    }
  };

  // Fetch services data
  const getServiceData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("Fetched Services Data:", data.msg);
        setservices(data.msg);
      };
    
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    userAuthentication();
    getServiceData();
  }, []);

  return (
    <AuthContext.Provider value={{ storeTokenInLS, Logoutuser, isLoggedin, user, services,authorizationToken,isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) throw new Error("useAuth used outside of the Provider");
  return authContextValue;
};
