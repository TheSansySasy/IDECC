import { useMemo } from "react";
import "./AngularContainer.css";

const AngularContainer = ({
  frameworkVersionCode,
  programmingLanguageIcon,
  componentDimensions,
  languageIcon,
  technologyCode,
  languageName,
  propPadding,
  propWidth,
  propHeight,
  propPadding1,
  propPadding2,
}) => {
  const cardStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameIconStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const card1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const card2Style = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className="frame50">
      <div className="frame51">
        <div className="card8" style={cardStyle}>
          <img
            className="frame-icon8"
            alt=""
            src={frameworkVersionCode}
            style={frameIconStyle}
          />
          <div className="angular">{programmingLanguageIcon}</div>
        </div>
        <div className="card9" style={card1Style}>
          <img className="frame-icon9" alt="" src={componentDimensions} />
          <div className="angular">{languageIcon}</div>
        </div>
        <div className="card9" style={card2Style}>
          <img className="frame-icon9" alt="" src={technologyCode} />
          <div className="angular">{languageName}</div>
        </div>
      </div>
    </div>
  );
};

export default AngularContainer;
