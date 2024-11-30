import React from "react";

function Hero() {
  return (
    <div className="container d-flex flex-column-reverse text-center text-lg-left flex-lg-row-reverse align-items-center gap-5 py-5 text-white">
      <div className="col-10 col-sm-8 col-lg-6">
        <img
          src=""
          className="d-block mx-lg-auto img-fluid"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div className="col-lg-6">
        <h1 className="mb-4 text-white">Talk to strangers, Make friends!</h1>
        <p>
          Experience a random chat alternative to find friends, connect with
          people, and chat with strangers from all over the world!
        </p>

        <a className="btn btn-primary px-10 py-3 text-xl" href="/login">
          <span className="d-flex" style={{ gap: "20px" }}>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
              height="28"
              width="28"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
              ></path>
            </svg>
            Start Chat
          </span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
