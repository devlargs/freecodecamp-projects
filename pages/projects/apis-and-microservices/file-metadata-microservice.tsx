import axios from "axios";
import { useState } from "react";
import meta from "constants/meta";
import SEO from "components/SEO";

export default () => {
  const [file, setFile] = useState([]);
  function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>): void {
    const files = Array.from(e.target.files);
    console.log("files:", files);
    setFile(files);
  }

  const submit = () => {
    const formData = new FormData();
    formData.append("file", file[0]);
    axios({
      method: "post",
      url: "/api/fileMetaData",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  return (
    <>
      <SEO title="File Metadata Microservice" />
      File: <input onChange={handleFileSelected} type="file" />
      <button onClick={submit}>Submit</button>
    </>
  );
};
