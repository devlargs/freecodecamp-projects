import { UNIQUE_KEY, DEFAULT } from "server/constants/errors";

export default (error: string) => {
  if (error.includes(UNIQUE_KEY.key)) {
    return UNIQUE_KEY.message;
  }

  return DEFAULT;
};
