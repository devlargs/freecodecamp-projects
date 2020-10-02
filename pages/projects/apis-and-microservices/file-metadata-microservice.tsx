import axios from "axios";
import { useState } from "react";
import WorkInProgress from "components/WorkInProgress";

export default () => {
  // const [file, setFile] = useState([]);
  // function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>): void {
  //   const files = Array.from(e.target.files);
  //   setFile(files);
  // }

  // const submit = () => {
  //   const formData = new FormData();
  //   formData.append("file", file[0]);
  //   axios({
  //     method: "post",
  //     url: "/api/fileMetaData",
  //     data: formData,
  //     headers: { "Content-Type": "multipart/form-data" },
  //   })
  //     .then(function (response) {
  //       //handle success
  //     })
  //     .catch(function (response) {
  //       //handle error
  //     });
  // };

  return (
    <>
      <WorkInProgress title="File Metadata Microservice" />
    </>
  );
};
