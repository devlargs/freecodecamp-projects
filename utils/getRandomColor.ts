import flatColors from "constants/flatColors";

export default (all = false) => {
  if (all) {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  } else {
    const rand = Math.floor(Math.random() * flatColors.length - 1);
    return flatColors[rand > 0 ? rand : 0];
  }
};
