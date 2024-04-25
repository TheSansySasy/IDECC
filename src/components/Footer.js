import { useMemo } from "react";
import "./Footer.css";

const Footer = ({
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propMarginLeft,
  propWidth1,
  onHomeText2Click,
  onAboutText2Click,
  onMyLabsText2Click,
  onNewProjectText2Click,
}) => {
  const footerStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  const frameStyle = useMemo(() => {
    return {
      width: propWidth,
      marginLeft: propMarginLeft,
    };
  }, [propWidth, propMarginLeft]);

  const frame1Style = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  

  return (
    <div className="footer" style={footerStyle}>
      <div className="footer-main">
        <div className="footer-header">
          <div className="idecc4">idecc</div>
          <div className="frame41">
            <div className="idecc5">idecc</div>
            <div className="frame42">
              <div className="contact">contact</div>
            </div>
          </div>
        </div>
        <div className="footer-content" style={frameStyle}>
          <div className="idecc-links-footer">
            <div className="home-about">
              <div className="home5" onClick={onHomeText2Click}>
                home
              </div>
              <div className="about6" onClick={onAboutText2Click}>
                about
              </div>
            </div>
            <div className="frame45">
              <div className="about6" onClick={onMyLabsText2Click}>
                my labs
              </div>
              <div className="about6" onClick={onNewProjectText2Click}>
                new project
              </div>
            </div>
          </div>
          <div className="frame47" style={frame1Style}>
            <div className="frame48">
              <div className="email">Email</div>
              <div className="email">LinkedIn</div>
              <div className="email">Twitter</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-child" />
    </div>
  );
};

export default Footer;
