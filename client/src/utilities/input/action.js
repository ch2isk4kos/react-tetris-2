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
  KeyQ: Action.Quit,
  KeyP: Action.Pause,
  Space: Action.FastDrop,
};

export const actionForKey = (code) => Key[code];
