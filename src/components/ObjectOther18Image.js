import { useMemo } from "react";
import "./ObjectOther18Image.css";

const ObjectOther18Image = ({
  objectOther18IconOverflow,
  objectOther18IconPosition,
}) => {
  const objectOther18IconStyle = useMemo(() => {
    return {
      overflow: objectOther18IconOverflow,
      position: objectOther18IconPosition,
    };
  }, [objectOther18IconOverflow, objectOther18IconPosition]);

  return (
    <img
      className="objectother-18-icon"
      alt=""
      src="/objectother-18@2x.png"
      style={objectOther18IconStyle}
    />
  );
};

export default ObjectOther18Image;
