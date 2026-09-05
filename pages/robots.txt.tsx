import { GetServerSideProps } from "next";
import nonPageRoutes from "constants/nonPageRoutes";
import { getOrigin } from "utils/siteRoutes";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const origin = getOrigin(req);

  const isPreview =
    !!process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  const disallowed = ["/api/"]
    .concat(nonPageRoutes)
    .map((path) => `Disallow: ${path}`)
    .join("\n");

  const body = isPreview
    ? `User-agent: *\nDisallow: /\n`
    : `User-agent: *\nAllow: /\n${disallowed}\n\nSitemap: ${origin}/sitemap.xml\n`;

  res.setHeader("Content-Type", "text/plain");
  res.write(body);
  res.end();

  return { props: {} };
};

export default () => null;
