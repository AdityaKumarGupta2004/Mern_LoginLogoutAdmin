import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
            <h2 className="header">404</h2>
            <h4>Sorry! Page Not found</h4>
            <p>
                Oops! it seems Like the page ur Trying to access 
                doesn't exist. If you believe there's an Issue, feel free to report it,
                we'll look into it.
            </p>
            <div className="btns">
                <NavLink to="/">Return Home</NavLink>
                <NavLink to="/contact">return Problem</NavLink>
            </div>
        </div>
      </section>
    </>
  );
};
