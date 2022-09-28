import { COLORS } from "./colors";

export const OPTIONAL_COLORS = [
  "#FF9472",
  COLORS.AQUA,
  "#EBF875",
  "#7898FB",
  "#E1EF7E",
  "#fc74fd",
  "#cfff04",
  "#fe4164",
  "#04d9ff",
  "#ccff02",
  "#c32148",
  "#cc9900",
  "#c1f80a",
  "#372d52",
];

export function tagColor(tagsAndColors, postTag) {
  const indexOfTag = tagsAndColors.findIndex(item => item.name.toLowerCase() === postTag.toLowerCase());
  if (indexOfTag !== -1) {
    return tagsAndColors[indexOfTag].color;
  }
  
  const index = Math.floor(Math.random() * (OPTIONAL_COLORS.length));
  if (index < OPTIONAL_COLORS.length)
    return OPTIONAL_COLORS[index];
  else
    return COLORS.SHADOW_PURPLE_NEON_SECONDARY;
};
