import axios from "axios";

export default (props) => {
  console.log(props);
  return <h1>Javascript Calculator</h1>;
};

export const getServerSideProps = async () => {
  const res = await axios.get("/api");
  return {
    props: {
      data: res.data,
    },
  };
};
