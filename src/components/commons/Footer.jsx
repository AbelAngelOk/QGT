import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import footerData from "./footerData.json";

const icons = [{svg: faFacebook,url: "facebook"}, {svg: faInstagram,url: "instagram"}, {svg: faLinkedin,url: "linkedin"}, {svg: faTwitter,url: "twitter"}, {svg: faYoutube,url: "youtube"}];

export const Footer = () => {
  const renderIcons = () => {
    return icons.map((icon, key) => (
      <a key={key} rel="noreferrer" target="_blank" href={`https://www.${icon.url}.com/`}>
        <FontAwesomeIcon className="footer__icon" icon={icon.svg} />
      </a>
    ));
  };

  return (
    <div className="footer__container ">
      <div className="footer__upper-container">
        <div className="footer__upper-left"></div>
        <div className="footer__upper-middle">{renderIcons()}</div>
        <div className="footer__upper-right"></div>
      </div>
      <div className="footer__bottom-container">
        <h3>{footerData.title}</h3>
        <p>{footerData.copyright}</p>
        <div className="footer__bottom-links">
          <a href="/">{footerData.legal}</a>
          <a href="/">{footerData.priv}</a>
        </div>
      </div>
    </div>
  );
};