import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ObjectOther18Image from "../components/ObjectOther18Image";
import ElevateContainer from "../components/ElevateContainer";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onMyLabsTextClick = useCallback(() => {
    navigate("/mylabs");
  }, [navigate]);

  const onNewProjectTextClick = useCallback(() => {
    navigate("/newproject");
  }, [navigate]);

  return (
    <div className="home">
      <div className="frame">
        <div className="frame1">
          <div className="frame2">
            <div className="navbar">
              <div className="idecc">IDECC</div>
              <div className="frame3">
                <div className="home1" onClick={onHomeTextClick}>home</div>
                <div className="about" onClick={onAboutTextClick}>
                  about
                </div>
                <div className="my-labs" onClick={onMyLabsTextClick}>
                  my labs
                </div>
                <div className="new-project" onClick={onNewProjectTextClick}>
                  new project
                </div>
              </div>
            </div>
          </div>
          <div className="frame4">
            <div className="hero">
              <div className="frame5">
                <b className="unleash-innovation-anywhere">
                  Unleash Innovation Anywhere
                </b>
                <div className="frame6">
                  <div className="your-cloud-ide">
                    Your Cloud IDE for Seamless Coding Beyond Boundaries
                  </div>
                  <div className="get-started-wrapper" onClick={onNewProjectTextClick}>
                    <div className="get-started">Get started</div>
                  </div>
                </div>
              </div>
              <img
                className="objectother-07-icon"
                alt=""
                src="/objectother-07@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="digital-labs">
          {/* <div className="digital-labs1">Digital Labs</div> */}
          <img className="digital-labs-child" alt="" src="/group-36.svg" />
        </div>
      </div>
      <div className="frame7">
        <div className="frame8">
          <div className="benefit1">
            <ObjectOther18Image
              objectOther18IconOverflow="unset"
              objectOther18IconPosition="relative"
            />
            <div className="frame9">
              <div className="frame10">
                <div className="code-unleashed-anytime">
                  code unleashed, anytime anywhere
                </div>
                <b className="instant-accessibility">Instant Accessibility</b>
              </div>
              <div className="your-code-your">
                Your Code, Your Way- Access your projects from any device,
                anywhere, anytime
              </div>
            </div>
          </div>
          <div className="benefit2">
            <div className="frame9">
              <div className="frame12">
                <div className="code-dynamically-scale">
                  code dynamically, scale effortlesly
                </div>
                <b className="instant-accessibility">Automated Scalability</b>
              </div>
              <div className="embrace-the-power">
                Embrace the power of the cloud for dynamic, on the fly scaling
                of your development environment
              </div>
            </div>
            <img
              className="objectother-13-icon"
              alt=""
              src="/objectother-13@2x.png" 
            />
          </div>
        </div>
        <ElevateContainer />
      </div>
    </div>
  );
};

export default Home;
