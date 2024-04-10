import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./About.css";

const About = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMyLabsTextClick = useCallback(() => {
    navigate("/mylabs");
  }, [navigate]);

  const onNewProjectTextClick = useCallback(() => {
    navigate("/newproject");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onHomeText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onMyLabsText2Click = useCallback(() => {
    navigate("/mylabs");
  }, [navigate]);

  const onNewProjectText2Click = useCallback(() => {
    navigate("/newproject");
  }, [navigate]);

  const onAbout2TextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className="about1">
      <div className="frame13">
        <Footer
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propWidth="841px"
          propMarginLeft="225px"
          propWidth1="575px"
          onHomeTextClick={onHomeTextClick}
          onMyLabsText2Click={onMyLabsTextClick}
          onNewProjectText2Click={onNewProjectTextClick}
          onAboutText2Click={onAboutTextClick}
        />
      </div>
      <div className="frame14">
        <div className="frame15">
          <div className="navbar1">
            <div className="idecc1">IDECC</div>
            <div className="frame16">
              <div className="home2" onClick={onHomeText2Click}>home</div>
              <div className="about2" onClick={onAboutTextClick}>about</div>
              <div className="my-labs1" onClick={onMyLabsText2Click}>my labs</div>
              <div className="new-project1" onClick={onNewProjectText2Click}>new project</div>
            </div>
          </div>
        </div>
        <div className="frame17">
          <div className="about3">ABOUT</div>
          <div className="frame18">
            <div className="welcome-to-interactive-container">
              <p className="welcome-to-interactive-develop">
                <span className="welcome-to">{`Welcome to `}</span>
                <b className="welcome-to">
                  Interactive Development Environment using Cloud Computing
                  (IDECC)
                </b>
                <span>
                  , where we revolutionize the developer experience. Say goodbye
                  to the hassle of setting up development environments for each
                  new project. With IDECC, we offer pre-made development
                  environments on the Cloud platform, enabling you to work
                  effortlessly anywhere, anytime.
                </span>
              </p>
              <p className="welcome-to-interactive-develop"></p>
              <p className="welcome-to-interactive-develop">
                Our mission is to empower developers to code on the go,
                eliminating the constraints of specific platforms or hardware
                setups. With our containerization technology, every piece of
                code you create is securely saved on the cloud, ensuring
                seamless access and collaboration.
              </p>
              <p className="welcome-to-interactive-develop"></p>
              <p className="welcome-to-interactive-develop">
                Experience the freedom to code without boundaries with IDECC.
                Join us and unlock a new era of development convenience and
                efficiency.
              </p>
            </div>
            <div className="frame19">
              <div className="frame20">
                <div className="rishabh-kesarwani-201532-container">
                  <p className="welcome-to-interactive-develop">
                    Rishabh Kesarwani
                  </p>
                  <p className="welcome-to-interactive-develop">201532</p>
                  <p className="welcome-to-interactive-develop">IT-82</p>
                </div>
                <div className="rishabh-kesarwani-201532-container">
                  <p className="welcome-to-interactive-develop">Sanskar Rai</p>
                  <p className="welcome-to-interactive-develop">201256</p>
                  <p className="welcome-to-interactive-develop">CS-86</p>
                </div>
              </div>
              <div className="supervisor-in-charge-container">
                <p className="welcome-to-interactive-develop">
                  Supervisor In charge
                </p>
                <p className="welcome-to-interactive-develop">
                  Dr. Nishant Sharma
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
