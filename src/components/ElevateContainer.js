import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./ElevateContainer.css";
import { on } from "events";

const ElevateContainer = () => {
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
    <div className="frame49">
      <div className="actionbanner">
        <div className="start-coding-in">start coding in the cloud</div>
        <b className="elevate-your-development">
          Elevate your Development experience now
        </b>
        <div className="get-started-container" onClick={onNewProjectTextClick}>
          <div className="get-started1">Get started</div>
        </div>
      </div>
      <Footer
        propPosition="static"
        onHomeText2Click={onHomeTextClick}
        onAboutText2Click={onAboutTextClick}
        onMyLabsText2Click={onMyLabsTextClick}
        onNewProjectText2Click={onNewProjectTextClick}
      />
    </div>
  );
};

export default ElevateContainer;
