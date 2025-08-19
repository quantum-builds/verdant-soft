export const slideFromLeft = {
  hidden: { opacity: 0, x: -150 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const slideFromTop = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const slideFromTopLeft = {
  hidden: { opacity: 0, y: -30, x: -50 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
  },
};

export const slideFromRight = {
  hidden: { opacity: 0, x: 150 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const slideFromBottom = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const slideFromBack = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    rotateX: 45,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateX: 0,
  },
};
