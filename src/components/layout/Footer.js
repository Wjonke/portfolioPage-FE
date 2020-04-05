import React from "react";

const Footer = () => {
  return (
    <footer class="page-footer blue">
      <div class="container">
        <div class="row center valign-wrapper">
          <div class="col l6 s12 ">
            <h5 class="white-text center">
              Full-Stack Web Developer | Experienced Senior Project Manager
            </h5>

            <p class="center grey-text text-lighten-3">
              "When action grows unprofitable, gather information. When
              information grows unprofitable, sleep." <p>-Ursula K. Le Guin</p>
            </p>
          </div>

          <div class="col l6  s12 ">
            <ul>
              <div>
                <li>
                  <a
                    class="grey-text text-lighten-3"
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
                    class="grey-text text-lighten-3"
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
                    class="grey-text text-lighten-3"
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

      <div class="footer-copyright center">
        <div class="container">© 2020 Copyright Wes Jonke</div>
      </div>
    </footer>
  );
};

export default Footer;
