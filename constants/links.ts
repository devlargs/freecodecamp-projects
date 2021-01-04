const FREECODECAMP = "https://www.freecodecamp.org";

export default {
  DATA_VISUALIZATION: {
    BAR_CHART:
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
  },
  FCC_CERTIFICATES: `${FREECODECAMP}/certification/devlargs`,
  FCC_CERTIFICATE_IMAGE: `https://icon-library.com/images/certification-icon/certification-icon-25.jpg`,
  FCC_COVER: `${FREECODECAMP}/news/content/images/2019/11/fcc_ghost_publication_cover.png`,
  FCC_TEST_SCRIPT:
    "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js",
  FONTS: {
    DANCING_SCRIPT: "https://fonts.googleapis.com/css?family=Dancing Script",
    ORBITRON: "https://fonts.googleapis.com/css?family=Orbitron",
    ROBOTO_MONO: "https://fonts.googleapis.com/css?family=Roboto+Mono",
  },
  GITHUB_PROFILE: "https://github.com/devlargs",
  GOOGLE_AD_CLIENT: "ca-pub-1798621837228697",
  GOOGLE_ADSENSE:
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
  GOOGLE_ANALYTICS:
    "https://www.googletagmanager.com/gtag/js?id=UA-186388859-1",
  MARKDOWN_IMAGE:
    "https://assets.mycast.io/actor_images/actor-johnny-sins-75125_large.jpg?1586055334",
  SAMPLE_URL: "https://ralphlargo.com",
  SHARE_TUBLER_URL: (e: any) => {
    return `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp,devlargs&caption=${e.author}&content=${e.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
  },
  SHARE_TWEET_URL: (e: any) =>
    `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(
      `"${e.quote}" \n ~ ${e.author}`
    )}`,
};
