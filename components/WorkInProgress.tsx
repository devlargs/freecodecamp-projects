import CenteredContent from "components/CenteredContent";
import SVGGenerator from "components/SVGGenerator";
import SEO from "components/SEO";

export default ({ title }) => {
  return (
    <CenteredContent>
      <SEO title={title} />
      <div style={{ textAlign: "center" }}>
        {SVGGenerator()}
        <h1 style={{ fontSize: "1.8em" }}>{title} (Work in Progress)</h1>
      </div>
    </CenteredContent>
  );
};
