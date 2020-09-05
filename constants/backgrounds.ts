import SD from "constants/styleDefaults";

const proj = "/projects";
const apis = "/apis-and-microservices";

export default (pathname?: string) => {
  switch (pathname) {
    case proj:
      return SD.colors.main;
    case `${proj}${apis}/timestamp-microservice`:
      return SD.colors.timeStampMicroservice;
    default:
      return SD.colors.main;
  }
};
