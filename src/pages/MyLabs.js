import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "./MyLabs.css";

const MyLabs = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNewProjectTextClick = useCallback(() => {
    navigate("/newproject");
  }, [navigate]);

  const onHomeText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutText2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onNewProjectText2Click = useCallback(() => {
    navigate("/newproject");
  }, [navigate]);

  return (
    <div className="mylabs">
      <div className="frame30">
        <div className="frame31">
          <div className="frame32">
            <div className="frame33">
              <div className="navbar3">
                <div className="frame34">
                  <div className="idecc3">IDECC</div>
                  <div className="home4" onClick={onHomeText2Click}>
                    home
                  </div>
                </div>
                <div className="frame35">
                  <div className="about5" onClick={onAboutText2Click}>
                    about
                  </div>
                  <div className="my-labs3">my labs</div>
                  <div
                    className="new-project3"
                    onClick={onNewProjectText2Click}
                  >
                    new project
                  </div>
                </div>
              </div>
              <div className="digital-labs3">Digital Labs</div>
            </div>
            <div className="frame36">
              <div className="frame37">
                <div className="card3">
                  <img className="frame-icon3" alt="" src="/frame.svg" />
                  <div className="visual-basics">Visual Basics</div>
                </div>
              </div>
              <div className="card4">
                <img className="frame-icon3" alt="" src="/frame.svg" />
                <div className="visual-basics">let’s GO</div>
              </div>
            </div>
          </div>
          <div className="frame38">
            <div className="card5">
              <img className="frame-icon5" alt="" src="/frame.svg" />
              <div className="visual-basics">Morse</div>
            </div>
            <div className="card6">
              <img className="frame-icon6" alt="" src="/frame.svg" />
              <div className="visual-basics">Dashboard</div>
            </div>
            <div className="card7">
              <img className="frame-icon6" alt="" src="/frame.svg" />
              <div className="visual-basics">Test1</div>
            </div>
          </div>
        </div>
      </div>
      <Footer
        propPosition="absolute"
        propTop="1143px"
        propLeft="0px"
        propWidth="840px"
        propMarginLeft="224px"
        propWidth1="574px"
        onHomeTextClick={onHomeTextClick}
        onAboutText2Click={onAboutTextClick}
        onNewProjectText2Click={onNewProjectTextClick}
      />
    </div>
  );
};

export default MyLabs;
