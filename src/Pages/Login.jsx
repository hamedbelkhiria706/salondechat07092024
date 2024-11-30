import React from "react";
// import "../styles/login.css";
import { Container } from "react-bootstrap";

function Login() {
  return (
    <Container id="loginCard" className="bg-dark m-0 vw-100">
      <div className="d-flex flex-column justify-start gap-4 self-center p-4 text-start">
        <h1 className="self-center text-2xl font-semibold sm:self-start">
          Welcome Back!
        </h1>
        <p className="text-center text-sm opacity-80 sm:text-start">
          Sign in to your account and start chatting with strangers!
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
          <button className="gsi-material-button block !w-full">
            <div className="gsi-material-button-state"></div>
            <div className="gsi-material-button-content-wrapper">
              <div className="gsi-material-button-icon">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="block"
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
              </div>
              <span className="gsi-material-button-contents">
                Continue with Google
              </span>
              <span className="hidden">Continue with Google</span>
            </div>
          </button>
          <button
            className="bg-[#1877F2] flex items-center max-w-[400px] justify-center border rounded-md shadow-md max-h-10 h-10 px-3 py-2 text-sm font-medium text-gray-800 focus:outline-none focus:ring-2
           focus:ring-offset-2 hover:bg-[#0865fe] focus:ring-[#0865fe] w-full"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              className="text-brightness"
              height="22"
              width="22"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
            </svg>
            <span className="text-brightness flex-1">
              Continue with Facebook
            </span>
          </button>
          <div className="flex items-center cursor-default py-0 text-sm w-full">
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] flex-grow mr-1.5"
            ></div>
            or
            <div
              data-orientation="horizontal"
              role="none"
              className="shrink-0 bg-border h-[1px] flex-grow ml-1.5"
            ></div>
          </div>
          <button
            className="bg-primary/90 text-brightness/90 text-sm max-h-10 h-10 flex items-center justify-center border rounded-md shadow-md
        px-3 py-2 font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-primary focus:ring-primary w-full max-w-[400px]"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="20"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
            <span className="flex-1">Email and Password</span>
          </button>
        </div>
        <span className="text-sm">
          Want to start chatting anonymously?{" "}
          <a className="link text-link" data-discover="true" href="/start/new">
            Get Started!
          </a>
        </span>
      </div>
    </Container>
  );
}

export default Login;
