import { GetServerSideProps } from "next";
import siteRoutes, { getOrigin } from "utils/siteRoutes";

const BUILD_TIME = new Date().toISOString();

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const origin = getOrigin(req);

  const urls = siteRoutes()
    .map(
      (path) =>
        `  <url>\n    <loc>${origin}${path}</loc>\n    <lastmod>${BUILD_TIME}</lastmod>\n  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default () => null;
