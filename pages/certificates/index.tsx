import CenteredContent from "components/CenteredContent";
import styled from "styled-components";
import certificates from "constants/certificates";
import links from "constants/links";
import SEO from "components/SEO";
import SD from "constants/styleDefaults";
import SkeletonImage from "components/SkeletonImage";

export default function () {
  return (
    <CenteredContent bgColor={SD.colors.certificates} svg={true} height="100%">
      <SEO
        title="Certificates Acquired"
        description="List of all certificates acquired by Ralph Largo on freeCodeCamp.org"
        imageLink={links.FCC_CERTIFICATE_IMAGE}
      />
      <Root>
        <Header>
          <h1>Certificates Acquired</h1>
          <p>
            {certificates.length} certifications earned on freeCodeCamp.org.
            Select any certificate to verify it.
          </p>
        </Header>
        <Grid>
          {certificates.map((q) => (
            <Card
              key={q.slug}
              href={`${links.FCC_CERTIFICATES}/${q.slug}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkeletonImage
                src={`/assets/images/certificates/${q.slug}.png`}
                alt={`${q.name} certificate`}
              />
              <div className="caption">
                <h2>{q.name}</h2>
                <span>View certification</span>
              </div>
            </Card>
          ))}
        </Grid>
      </Root>
    </CenteredContent>
  );
}

const Root = styled.div`
  width: 92vw;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0 60px 0;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 8px;
  }

  p {
    color: rgba(255, 255, 255, 0.85);
    margin: 0;
  }

  @media screen and (max-width: 520px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;

  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const Card = styled.a`
  display: block;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  color: inherit;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.26);
  }

  .caption {
    padding: 14px 16px 16px 16px;
    border-top: 1px solid #eef2f7;

    h2 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0 0 4px 0;
      color: #1f2a37;
    }

    span {
      font-size: 0.85rem;
      color: ${SD.colors.main};
    }
  }
`;
