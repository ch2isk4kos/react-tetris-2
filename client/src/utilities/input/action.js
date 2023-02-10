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
