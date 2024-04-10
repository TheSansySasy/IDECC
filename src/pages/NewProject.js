import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AngularContainer from "../components/AngularContainer";
import Footer from "../components/Footer";
import "./NewProject.css";

const NewProject = () => {
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

  const onHomeText2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutText2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onMyLabsText2Click = useCallback(() => {
    navigate("/mylabs");
  }, [navigate]);

  return (
    <div className="newproject">
      <div className="frame21">
        <div className="frame22">
          <div className="navbar2">
            <div className="frame23">
              <div className="idecc2">IDECC</div>
              <div className="home3" onClick={onHomeText2Click}>
                home
              </div>
            </div>
            <div className="frame24">
              <div className="about4" onClick={onAboutText2Click}>
                about
              </div>
              <div className="my-labs2" onClick={onMyLabsText2Click}>
                my labs
              </div>
              <div className="new-project2">new project</div>
            </div>
          </div>
        </div>
        <div className="frame25">
          <div className="digital-labs2">Digital Labs</div>
        </div>
      </div>
      <div className="frame26">
        <AngularContainer
          frameworkVersionCode="/frame.svg"
          programmingLanguageIcon="Angular"
          componentDimensions="/frame.svg"
          languageIcon="C"
          technologyCode="/frame.svg"
          languageName="C++"
        />
        <div className="frame27">
          <div className="frame28">
            <div className="frame29">
              <div className="card">
                <img className="frame-icon" alt="" src="/frame.svg" />
                <div className="c">C#</div>
              </div>
              <div className="card1">
                <div className="django">Django</div>
                <img className="frame-icon1" alt="" src="/frame.svg" />
              </div>
            </div>
            <div className="card2">
              <img className="frame-icon2" alt="" src="/frame.svg" />
              <div className="c">Flask</div>
            </div>
          </div>
        </div>
        <AngularContainer
          frameworkVersionCode="/frame.svg"
          programmingLanguageIcon="Go"
          componentDimensions="/frame.svg"
          languageIcon="Java"
          technologyCode="/frame.svg"
          languageName="JavaScript"
          propPadding="var(--padding-6xs) var(--padding-7xs) var(--padding-7xs)"
          propWidth="93px"
          propHeight="93px"
          propPadding1="var(--padding-6xs) var(--padding-6xs) var(--padding-5xs)"
          propPadding2="var(--padding-6xs) var(--padding-6xs) var(--padding-5xs)"
        />
        <AngularContainer
          frameworkVersionCode="/frame.svg"
          programmingLanguageIcon="Node.js"
          componentDimensions="/frame.svg"
          languageIcon="Python"
          technologyCode="/frame.svg"
          languageName="React"
          propPadding="var(--padding-8xs) var(--padding-8xs) var(--padding-7xs)"
          propWidth="95px"
          propHeight="95px"
          propPadding1="var(--padding-7xs) var(--padding-8xs) var(--padding-6xs)"
          propPadding2="var(--padding-6xs) var(--padding-6xs) var(--padding-5xs)"
        />
      </div>
      <Footer
        propPosition="absolute"
        propTop="1143px"
        propLeft="0px"
        propWidth="841px"
        propMarginLeft="225px"
        propWidth1="575px"
        onHomeTextClick={onHomeTextClick}
        onAboutText2Click={onAboutTextClick}
        onMyLabsText2Click={onMyLabsTextClick}
      />
    </div>
  );
};

export default NewProject;
