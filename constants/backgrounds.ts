import SD from "constants/styleDefaults";

const proj = "/projects";
const apis = "/apis-and-microservices";

export default (pathname?: string) => {
  switch (pathname) {
    case "/":
      return SD.colors.main;
    case proj:
    case `${proj}${apis}/timestamp-microservice`:
      return SD.colors.timeStampMicroservice;
    case `${proj}${apis}/url-shortener`:
      return SD.colors.urlShortener;
    case `${proj}${apis}/request-header-parser`:
      return SD.colors.requestHeaderParser;
    default:
      return "#fff";
  }
};
