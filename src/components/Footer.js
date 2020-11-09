import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__accounts">
        <p className="footer__accounts__follow">Follow me</p>
        <a
          href="https://twitter.com/MachiImad"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "twitter"]} />
        </a>
        <a href="https://github.com/ImadMachi" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={["fab", "github"]} />
        </a>
        <a
          href="https://linkedin.com/in/imad-machi-b48a631ba"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </a>
      </div>
      <p className="footer__copyright">Copyright &copy; 2020</p>
    </footer>
  );
};

export { Footer as default };
