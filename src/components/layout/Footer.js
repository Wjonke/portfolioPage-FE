import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer blue">
      <div className="container">
        <div className="row center valign-wrapper">
          <div className="col l6 s12 ">
            <h5 className="white-text center">
              Please feel free to reach out to me. References, resume and
              additional information available upon request.
            </h5>

            <p className="center grey-text text-lighten-3">
              "When action grows unprofitable, gather information. When
              information grows unprofitable, sleep."
            </p>
            <p>-Ursula K. Le Guin</p>
          </div>

          <div className="col l6  s12 ">
            <ul>
              <div>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github link"
                    href="https://github.com/Wjonke"
                  >
                    <i className="fa fa-github fa-3x"></i>
                  </a>
                </li>
              </div>

              <div>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LinkedIn link"
                    href="https://www.linkedin.com/in/wes-jonke"
                  >
                    <i className="fa fa-linkedin fa-3x"></i>
                  </a>
                </li>
              </div>

              <div>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Contact me"
                    href="mailto:wesjonke@gmail.com"
                  >
                    <i className="fa fa-envelope-square fa-3x"></i>
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright center">
        <div className="container">© 2020 Copyright Wes Jonke</div>
      </div>
    </footer>
  );
};

export default Footer;
