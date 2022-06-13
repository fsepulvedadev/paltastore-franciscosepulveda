import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import web from "../../assets/chrome.svg";
import linkedin from "../../assets/linkedin.svg";

const Footer = () => {
  return (
    <>
      <footer id="sticky-footer" className="py-3 bg-dark text-white-50">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col d-inline-flex flex-column flex-md-row justify-content-center align-items-center">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top my-md-0 mb-3"
              alt="React Bootstrap logo"
            />
            <p className="p-0 m-0 text-center ">
              2022 -{" "}
              <a
                className=" text-center text-decoration-none text-white"
                href="https://fsepulveda.netlify.app/"
              >
                Francisco Sepulveda
              </a>{" "}
            </p>
          </div>
          <div className="col d-flex d-md-block">
            <ul className="palta-list d-flex justify-content-center align-items-center m-0 p-0">
              <li className="palta-list-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/fsepulvedadev/"
                >
                  <img src={linkedin} alt="" />
                </a>
              </li>
              <li className="palta-list-item mx-3">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/panchixnrc"
                >
                  <img src={github} alt="" />
                </a>
              </li>
              <li className="palta-list-item">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://fsepulveda.netlify.app/"
                >
                  <img src={web} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
