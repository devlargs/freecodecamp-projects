import CenteredContent from "components/CenteredContent";
import styled from "styled-components";
import certificates from "constants/certificates";
import links from "constants/links";

export default function () {
  return (
    <CenteredContent bgColor="ghostwhite" height="100%">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ paddingTop: 20, marginBottom: 0, fontSize: "2rem" }}>
          Certificates Acquired
        </h1>
        {certificates.map((q, i) => (
          <a key={i} href={`${links.FCC_CERTIFICATES}/${q}`} target="_blank">
            <StyledImage src={`/assets/images/certificates/${q}.png`} alt={q} />
          </a>
        ))}
      </div>
    </CenteredContent>
  );
}

const StyledImage: any = styled.img`
  padding: 20px;
  width: 70vw;
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
