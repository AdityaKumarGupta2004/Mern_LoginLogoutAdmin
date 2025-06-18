import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from 'react-toastify'
const URL = "http://localhost:3000/api/auth/login";

export const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState(""); // For error messages
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  // Handle input change
  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset error before request

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      

      const res_data = await response.json();

      if(response.ok){
      storeTokenInLS(res_data.token);
      setUser({ email: "", password: "" });
      toast.success("Login successful!");
     navigate("/");
      }else{
        toast.error(res_data.extraDetails? res_data.extraDetails : res_data.message);
        console.log("Invalid Credential");
      }
      // navigate(0); 
      // navigate("/About");

    } catch (error) {
      console.error("Login Error:", error.message);
      alert("Invalid Credintals");
      setErrorMessage(error.message); // Set error message for UI
    }
  };

  return (
    <section>
      <main>
        <div className="section-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-image reg-img">
              <img
                src="/images/register.png"
                alt="a nurse with a cute look"
                width="400"
                height="500"
              />
            </div>
            {/* Main Registration Code */}
            <div className="registration-form">
              <h1 className="main-heading mb-3">Login Form</h1>
              <br />
              {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Show error */}
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={handleInput}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInput}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">Login Now</button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};
