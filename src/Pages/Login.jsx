import React from "react";
import {Link} from 'react-router-dom'

// Reusable LoginOptionButton component
const LoginOptionButton = ({
  text,
  icon,
  onClick,
  to,
  buttonClassName, // e.g., "bg-white" or "bg-primary text-white"
  iconContainerStyle,
}) => {
  const commonButtonClasses = "w-100 border-0 rounded p-2";
  // Inner content structure
  const content = (
    <div className="d-flex align-items-center text-start"> {/* text-start to align text left within the button */}
      <div style={iconContainerStyle}>
        {icon}
      </div>
      <span className="flex-grow-1">{text}</span>
    </div>
  );

  if (to) {
    // If 'to' is provided, render a Link styled as a button
    return (
      <Link to={to} className={`${commonButtonClasses} ${buttonClassName} text-decoration-none d-block`}>
        {content}
      </Link>
    );
  }

  // Otherwise, render a button
  return (
    <button onClick={onClick} className={`${commonButtonClasses} ${buttonClassName}`}>
      {content}
    </button>
  );
};

function Login() {
  const icon_style = { // This style is for the div wrapping the icon
    height: "20px",
    marginRight: "12px",
    minWidth: "20px",
    width: "20px",
  };

  return (
    <div className="bg-secondary p-4 vw-100">
      <div
        className="d-flex flex-column text-center p-4 bg-dark rounded "
        style={{ maxWidth: "28rem", margin: "0 auto" }}
      >
        <h1 className="text-2xl font-semibold text-white">Bienvenue chez nous!</h1>
        <p className="text-sm text-white-50">
          Connectez vous et commencez à chatter!
        </p>
        <div className="d-flex flex-column" style={{ gap: "20px" }}>
          <LoginOptionButton
            text="Continuer avec Google"
            icon={
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="block" // Ensure SVG scales correctly
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            }
            onClick={() => console.log("Google login clicked")} // Placeholder action
            buttonClassName="bg-white text-dark" // Explicitly set text color if needed, or rely on default
            iconContainerStyle={icon_style}
          />
          <LoginOptionButton
            text="Continuer avec Facebook"
            icon={
              <svg
                fill="white"
                stroke-width="0"
                viewBox="0 0 512 512"
                // style={icon_style} // Style is now applied to the container by LoginOptionButton
                height="1em" // Use em for scalable icons relative to font size, or keep fixed
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            }
            onClick={() => console.log("Facebook login clicked")} // Placeholder action
            buttonClassName="bg-primary text-white"
            iconContainerStyle={icon_style}
          />

          <div className="d-flex align-items-center" style={{ gap: "20px" }}>
            <div className="bg-secondary w-100" style={{ height: "1px" }}></div>
            <span className="text-white">ou bien</span>
            <div className="bg-secondary w-100" style={{ height: "1px" }}></div>
          </div>

          <LoginOptionButton
            text="Email et Mot de Passe"
            to="/eplogin" // Navigate to email/password login page
            icon={
              <svg
                fill="white"
                stroke-width="0"
                viewBox="0 0 24 24"
                // style={icon_style} // Style is now applied to the container
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            }
            buttonClassName="bg-warning text-white"
            iconContainerStyle={icon_style}
          />
        </div>
        <span className="text-sm text-white-50 mt-2">
          Vous n'avez pas encore de compte?
          <Link className="link text-info" data-discover="true" to="/register">
            Inscrivez-vous maintenant!
          </Link><br/>
          <Link className="link text-info mt-1 d-inline-block" to='/resetpassword'>Redéfinir votre mot de passe</Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
