import { NavLink} from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../store/auth";

export const Navbar = () => {
  const {isLoggedin} = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">ThapaTechnical</NavLink>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {isLoggedin ?(<li>
                <NavLink to="/logout"> Logout </NavLink>
              </li>):( <> 
              <li>
                <NavLink to="/register"> Register </NavLink>
              </li>
              <li>
                <NavLink to="/login"> Login </NavLink>
              </li>
              </>)}
            
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// export const Navbar = () => {
//   return (
//     <header>
//       <div className="container">
//         {/* Logo */}
//         <div className="logo-brand">
//           <NavLink to="/">Aditya Kumar Gupta</NavLink>
//         </div>

//         {/* Navigation Menu */}
//         <nav>
//           <ul>
//             {[
//               { path: "/", label: "Home" },
//               { path: "/about", label: "About" },
//               { path: "/service", label: "Services" },
//               { path: "/contact", label: "Contact" },
//               { path: "/register", label: "Register" },
//               { path: "/login", label: "Login" },
//               { path: "/logout", label: "Logout" },
//             ].map(({ path, label }) => (
//               <li key={path}>
//                 <NavLink to={path} end={path === "/"}>
//                   {label}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };
