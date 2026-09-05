import Head from "next/head";
import { useRouter } from "next/router";
import links from "constants/links";
import meta from "constants/meta";
import cs from "utils/convertString";

type Props = {
  withFCCScript?: boolean;
  title: string;
  description?: string;
  imageUrl?: string;
  imageLink?: string;
  imgAlt?: string;
};

const SITE_NAME = "Free Code Camp Projects";

const getOrigin = () => {
  if (process.browser) {
    return window.location.origin;
  }
  if (process.env.WEBSITE_URL) {
    return process.env.WEBSITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "";
};

export default ({
  description,
  withFCCScript = false,
  title,
  imageLink,
  imgAlt,
}: Props) => {
  const desc = description || meta.description(title);
  const router = useRouter();
  const origin = getOrigin();
  const path = `${router?.asPath || "/"}`.split("?")[0].split("#")[0];
  const url = origin ? `${origin}${path}` : "";
  const image = imageLink
    ? imageLink
    : origin
    ? `${origin}/assets/images/projects/${cs(title, "sentence", "kebab")}.png`
    : "";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      {url && <link rel="canonical" href={url} />}

      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}
      {image && (
        <meta property="og:image:alt" content={imgAlt || `${title} preview`} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      {image && <meta name="twitter:image" content={image} />}

      {withFCCScript && <script src={links.FCC_TEST_SCRIPT}></script>}
    </Head>
  );
};
