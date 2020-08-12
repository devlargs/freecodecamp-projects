import axios from "axios";

export default (props) => {
  return <h1>Javascript Calculator</h1>;
};

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:8000/api");
  return {
    props: {
      data: res.data,
    },
  };
};
