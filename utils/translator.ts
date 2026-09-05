import {
  americanOnly,
  americanToBritishSpelling,
  americanToBritishTitles,
  britishOnly,
} from "constants/translatorDictionary";
import {
  AMERICAN_TO_BRITISH,
  BRITISH_TO_AMERICAN,
} from "constants/translatorLocales";

export const NO_TRANSLATION = "Everything looks good to me!";

const invert = (source: object) =>
  Object.keys(source).reduce((acc, key) => {
    acc[source[key]] = key;
    return acc;
  }, {});

const dictionaries = {
  [AMERICAN_TO_BRITISH]: {
    ...americanOnly,
    ...americanToBritishSpelling,
    ...americanToBritishTitles,
  },
  [BRITISH_TO_AMERICAN]: {
    ...britishOnly,
    ...invert(americanToBritishSpelling),
    ...invert(americanToBritishTitles),
  },
};

const times = {
  [AMERICAN_TO_BRITISH]: { pattern: /^\d{1,2}:\d{2}$/, from: ":", to: "." },
  [BRITISH_TO_AMERICAN]: { pattern: /^\d{1,2}\.\d{2}$/, from: ".", to: ":" },
};

const timePatterns = {
  [AMERICAN_TO_BRITISH]: "\\d{1,2}:\\d{2}",
  [BRITISH_TO_AMERICAN]: "\\d{1,2}\\.\\d{2}",
};

const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const matchers = {};

const getMatcher = (locale: string) => {
  if (!matchers[locale]) {
    const keys = Object.keys(dictionaries[locale])
      .sort((a, b) => b.length - a.length)
      .map(escape);

    matchers[locale] = new RegExp(
      `(?<![A-Za-z])(?:${timePatterns[locale]}|${keys.join("|")})(?![A-Za-z])`,
      "gi"
    );
  }
  return matchers[locale];
};

const matchCase = (source: string, replacement: string) =>
  /^[A-Z]/.test(source)
    ? replacement.charAt(0).toUpperCase() + replacement.slice(1)
    : replacement;

export const highlight = (value: string) =>
  `<span class="highlight">${value}</span>`;

export default (text: string, locale: string) => {
  let changed = false;

  const translation = text.replace(getMatcher(locale), (match) => {
    const time = times[locale];

    if (time.pattern.test(match)) {
      changed = true;
      return highlight(match.replace(time.from, time.to));
    }

    const replacement = dictionaries[locale][match.toLowerCase()];
    if (!replacement) {
      return match;
    }

    changed = true;
    return highlight(matchCase(match, replacement));
  });

  return changed ? translation : NO_TRANSLATION;
};
