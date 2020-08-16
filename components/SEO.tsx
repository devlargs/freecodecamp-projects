import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  withFCCScript?: boolean;
  title: string;
  description: string;
  imageUrl?: string;
  imageLink?: string;
  imgAlt?: string;
};

export default ({
  description = "Free Code Camp Projects | Created by Ralph Largo",
  withFCCScript = false,
  title,
  imageUrl,
  imageLink,
  imgAlt,
}: Props) => {
  const router = useRouter();
  const origin = process.browser
    ? window.location.origin
    : process.env.WEBSITE_URL;

  const url = `${origin}${router?.pathname}`;
  const imgUrl = imageLink ? imageLink : `${origin}${imageUrl}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="og:type" content="article" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="og:title" property="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="og:url" content={url} />
      <meta name="og:image" content={imgUrl} />
      <meta name="og:image_alt" content={imgAlt || "freecodecamp-image"} />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:image" content={imgUrl} />

      {withFCCScript && (
        <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
      )}
    </Head>
  );
};
