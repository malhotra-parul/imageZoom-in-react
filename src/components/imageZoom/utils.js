export const getCursorPos = (e, normalImageRef) => {
  let a,
    x = 0,
    y = 0;
  e = e || window.event;

  a = normalImageRef.current.getBoundingClientRect();
  x = e.pageX - a.left;
  y = e.pageY - a.top;
  x = x - window.pageXOffset;
  y = y - window.pageYOffset;

  return { x: x, y: y };
};

export const moveLens = (
  e,
  zoomedImageRef,
  lensRef,
  normalImageRef,
  zoomedImageSize
) => {
  const viewArea = zoomedImageRef.current;
  const lens = lensRef.current;
  const image = normalImageRef.current;
  const ratio = {
    cx: (zoomedImageRef.current.offsetWidth / lensRef.current.offsetWidth) / 2,
    cy: (zoomedImageRef.current.offsetHeight / lensRef.current.offsetHeight) / 2,
  };
  
  e.preventDefault();
  const { x, y } = getCursorPos(e, normalImageRef);

  let a = x - (lens.offsetWidth / 2);
  let b = y - (lens.offsetHeight / 2);
  if (a > image.style.width - lens.offsetWidth) {
    a = image.style.width - lens.offsetWidth;
  }
  if (a < 0) a = 0;

  if (b > image.style.height - lens.offsetHeight) {
    b = image.style.height - lens.offsetHeight;
  }

  if (b < 0) b = 0;
  lens.style.left = a + "px";
  lens.style.top = b + "px";

  viewArea.style.backgroundSize = `${zoomedImageSize.width * ratio.cx}px ${
    zoomedImageSize.height * ratio.cy
  }px`;
  viewArea.style.backgroundPosition = `-${x * ratio.cx}px -${y * ratio.cy}px`;
};
