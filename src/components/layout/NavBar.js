import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper blue">
          <span className="brand-logo">Wes Jonke</span>

          {/* for mobile screen menu */}
          <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>

          <ul className="right hide-on-med-and-down">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Github link"
                href="https://github.com/Wjonke"
              >
                <i className="fa fa-github fa-2x"></i>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn link"
                href="https://www.linkedin.com/in/wes-jonke"
              >
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </li>

            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                title="Contact me"
                href="mailto:wesjonke@gmail.com"
              >
                <i className="fa fa-envelope-square fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* for mobile screen menu */}
      <ul className="sidenav" id="mobile-demo">
        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Github link"
            href="https://github.com/Wjonke"
          >
            <i className="fa fa-github fa-2x"></i>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn link"
            href="https://www.linkedin.com/in/wes-jonke"
          >
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Contact me"
            href="mailto:wesjonke@gmail.com"
          >
            <i className="fa fa-envelope-square fa-2x"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
