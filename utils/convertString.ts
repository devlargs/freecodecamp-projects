const sentence = "sentence";
const kebab = "kebab";

export default (string: string, from: string, to: string) => {
  switch (from) {
    case sentence: {
      if (to === "kebab") {
        return string.replace(/\s+/g, "-").toLowerCase();
      }
    }
    default:
      return string;
  }
};
