import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <div>
      <nav>
        <div
          className="nav-wrapper blue"
          style={{ paddingLeft: "3em", paddingRight: "3em" }}
        >
          <Span className="brand-logo ">Wes Jonke</Span>

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
      <Ul className="sidenav" id="mobile-demo">
        <Li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Github link"
            href="https://github.com/Wjonke"
          >
            <i className="fa fa-github fa-2x"></i>
          </a>
        </Li>

        <Li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn link"
            href="https://www.linkedin.com/in/wes-jonke"
          >
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </Li>

        <Li>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title="Contact me"
            href="mailto:wesjonke@gmail.com"
          >
            <i className="fa fa-envelope-square fa-2x"></i>
          </a>
        </Li>
        <Li>
          <StyledLink title="Projects" href="#projects">
            Jump to Projects
          </StyledLink>

          <StyledLink title="Skills" href="#skills">
            Jump to Skills
          </StyledLink>
        </Li>
      </Ul>
    </div>
  );
};
const Span = styled.span`
  font-family: "Ubuntu";
`;
const P = styled.p`
  display: flex;

  align-items: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #42a5f5;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  width: 80%;
`;
const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 1%;

  border: 1px solid lightGray;

  &:hover {
    border: 1px solid dodgerBlue;
    color: white;
    transition: 0.4s;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  }
`;
export default NavBar;
