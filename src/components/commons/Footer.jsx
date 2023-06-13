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
      <div className='self-center mt-5 text-center'>
        <h3 className='tracking-[3px] text-[1.8rem] text-[#cdd9e8]'>{footerData.title}</h3>
        <p className='text-[0.9rem] text-[#cdd9e8] mt-[15px]'>{footerData.copyright}</p>
        <div className='flex'>
          <a className='py-0 px-10 text-[#cdd9e8] text-[0.9rem] mt-[15px] border-r-[1px] border-r-[#cdd9e8] underline font-bold' href='/'>{footerData.legal}</a>
          <a className='py-0 px-10 text-[#cdd9e8] text-[0.9rem] mt-[15px] underline font-bold' href='/'>{footerData.priv}</a>
        </div>
      </div>
    </div>
  );
};