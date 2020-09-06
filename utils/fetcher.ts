import axios from "axios";

const fetcher = async (url: string) => {
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (err) {
    return err;
  }
};

export default fetcher;
