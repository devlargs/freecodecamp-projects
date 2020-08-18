export default (num: number): string => {
  if (num === 0) {
    return "00";
  } else if (`${num}`.length === 1) {
    return `0${num}`;
  } else {
    return `${num}`;
  }
};
