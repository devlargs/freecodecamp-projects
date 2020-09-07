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

export default ({
  description,
  withFCCScript = false,
  title,
  imageUrl,
  imageLink,
  imgAlt,
}: Props) => {
  const desc = description || meta.description(title);
  const router = useRouter();
  const origin = process.browser
    ? window.location.origin
    : process.env.WEBSITE_URL;

  const url = `${origin}${router?.pathname}`;
  const imgUrl = imageLink
    ? imageLink
    : `${origin}/assets/images/projects/${cs(title, "sentence", "kebab")}.png`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="og:type" content="article" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={desc} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" content={desc} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={desc} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={imgUrl} />
      <meta name="og:image_alt" content={imgAlt || "freecodecamp-image"} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={imgUrl} />

      {withFCCScript && <script src={links.FCC_TEST_SCRIPT}></script>}
    </Head>
  );
};
