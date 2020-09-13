import React from "react";
import "./styles.css";
import github from "../../assets/icons8-github.svg"
import twitter from "../../assets/icons8-twitter.svg";
import medium from "../../assets/icons8-medium-new.svg";

const social = [
  {
    id: 1,
    icon: github,
    link: "https://github.com/malhotra-parul",
    handle: "Github",
  },
  {
    id: 2,
    icon: twitter,
    link: "https://twitter.com/malhotra_parul",
    handle: "Twitter",
  },
  {
    id: 3,
    icon: medium,
    link: "https://medium.com/@parulm.business",
    handle: "Medium",
  },
];

const Footer = () => {
  const footer = "© All rights are reserved | 2020 ";

  return (
    <div className="BottomBar">
      <span className="copyright">{footer}</span>
      <div className="socialIcons">
        {social.map(({ id, icon, link, handle }) => (
          <a
          className="socialLinks"
            key={id}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="image" src={icon} alt={handle} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;