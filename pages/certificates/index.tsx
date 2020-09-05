import CenteredContent from "components/CenteredContent";
import styled from "styled-components";

export default function () {
  return (
    <CenteredContent bgColor="ghostwhite" height="100%">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ paddingTop: 20, marginBottom: 0, fontSize: "2rem" }}>
          Certificates Acquired
        </h1>
        <StyledImage src="/assets/images/certificates/responsive-web-design.png" />
        <StyledImage src="/assets/images/certificates/javascript-algorithms-and-data-structures.png" />
        <StyledImage src="/assets/images/certificates/front-end-libraries.png" />
      </div>
    </CenteredContent>
  );
}

const StyledImage = styled.img`
  padding: 20px;
  width: 80vw;
  height: 80vh;
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
