export const Action = {
  Rotate: "Rotate",
  Right: "Right",
  SlowDrop: "SlowDrop",
  Left: "Left",
  FastDrop: "FastDrop",
  Pause: "Pause",
  Quit: "Quit",
};

export const Key = {
  ArrowUp: Action.Rotate,
  ArrowRight: Action.Right,
  ArrowDown: Action.SlowDrop,
  ArrowLeft: Action.Left,
  Space: Action.FastDrop,
  KeyP: Action.Pause,
  KeyQ: Action.Quit,
};

export const actionForKey = (code) => Key[code];

export const actionIsDrop = (action) => {};
