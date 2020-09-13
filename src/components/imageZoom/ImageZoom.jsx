import React, { useRef, Fragment } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./index.module.css";
import { moveLens } from "./utils"

const ImageZoom = (props) => {
  const {
    imageURL,
    zoomImageURL,
    placement,
    imageSize,
    zoomedImageSize,
    isActive,
  } = props;

  let normalImageRef = useRef(null);
  let zoomedImageRef = useRef(null);
  let lensRef = useRef(null);

  const lensStyle = {
    position: "absolute",
    border: "1px solid #dadada",
    width: "100px",
    height: "100px",
    zIndex: 99,
    opacity: isActive ? 0.4 : 0,
    backgroundImage: "linear-gradient(to bottom, #dadada, #eaeaea)",
  };

  const normalImageStyle = {
    backgroundImage: `url(${imageURL})`,
    backgroundSize: `${imageSize.width}px ${imageSize.height}px`,
    width: `${imageSize.width}px`,
    height: `${imageSize.height}px`,
  };

  const zoomedImageStyle = {
    backgroundImage: `url(${zoomImageURL || imageURL})`,
    backgroundRepeat: "no-repeat",
    width: `${zoomedImageSize.width}px`,
    height: `${zoomedImageSize.height}px`,
  };

  const openZoom = (e) => {
    if (zoomedImageRef.current) {
      moveLens(e,
        zoomedImageRef,
        lensRef,
        normalImageRef,
        zoomedImageSize);
    }

    const { onZoom } = props;
    onZoom && onZoom();
  };

  const closeZoom = () => {
    const { onClose } = props;
    onClose && onClose();
  };

  const eventType = {
    onMouseMove: openZoom,
    onMouseLeave: closeZoom,
  };

  return (
    <Fragment>
      <div ref={lensRef} style={lensStyle} {...eventType}></div>
      <div
        className={cx(styles.normalImage, {
          [styles.zoomOutCursor]: isActive,
        })}
        style={normalImageStyle}
        ref={normalImageRef}
        {...eventType}
      >
        {isActive && (
          <div
            className={cx(styles.zoomedImage, styles[placement])}
            style={zoomedImageStyle}
            ref={zoomedImageRef}
          ></div>
        )}
      </div>
    </Fragment>
  );
};

ImageZoom.propTypes = {
  imageURL: PropTypes.string.isRequired,
  zoomImageURL: PropTypes.string.isRequired,
  placement: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
    "center",
  ]).isRequired,
  imageSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  zoomedImageSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  isActive: PropTypes.bool.isRequired,
  onZoom: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  zoomType: PropTypes.oneOf(["click", "hover"]).isRequired,
};

ImageZoom.defaultProps = {
  zoomImageURL: "",
  placement: "top-right",
  imageSize: {
    width: 300,
    height: 300,
  },
  zoomedImageSize: {
    width: 600,
    height: 600,
  },
  isActive: false,
  zoomType: "hover",
};

export default ImageZoom;
