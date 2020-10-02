import CenteredContent from "components/CenteredContent";
import styled from "styled-components";
import certificates from "constants/certificates";
import links from "constants/links";
import SEO from "components/SEO";
import SD from "constants/styleDefaults";
import Img from "react-cool-img";
// import loadingImage from "./loader.gif";

export default function () {
  return (
    <CenteredContent bgColor={SD.colors.certificates} svg={true} height="100%">
      <SEO
        title="Certificates Acquired"
        description="List of all certificates acquired by Ralph Largo on freeCodeCamp.org"
        imageLink={links.FCC_CERTIFICATE_IMAGE}
      />
      <div style={{ textAlign: "center" }}>
        <h1
          style={{
            paddingTop: 20,
            marginBottom: 20,
            fontSize: "2rem",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Certificates Acquired
        </h1>
        {certificates.map((q, i) => (
          <a key={i} href={`${links.FCC_CERTIFICATES}/${q}`} target="_blank">
            <StyledImage
              placeholder="/assets/images/loader.gif"
              src={`/assets/images/certificates/${q}.png`}
              alt={q}
            />
          </a>
        ))}
      </div>
    </CenteredContent>
  );
}

const StyledImage: any = styled(Img)`
  margin-bottom: 30px;
  width: 70vw;
  border: 1px solid black;
  height: 70vh;
}

  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 100%;
    padding: 5px;
  }

  @media screen and (min-width: 401px) and (max-width: 768px) {
    width: 95vw;
    height: 45vh;
  }
`;
