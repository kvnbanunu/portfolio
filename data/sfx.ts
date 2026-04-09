export type SoundEffect =
  | "hover"
  | "select"
  | "cancel"
  | "save"
  | "get"
  | "error";

export const sfx: Record<SoundEffect, string> = {
  hover: "/sfx/cursor_move.mp3",
  select: "/sfx/select.mp3",
  cancel: "/sfx/cancel.mp3",
  save: "/sfx/save_load.mp3",
  get: "/sfx/item_get.mp3",
  error: "/sfx/error_select.mp3",
};
