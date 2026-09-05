import { Row, Col, Button, Spin } from "antd";
import styled from "styled-components";
import StyledCard from "styles/StyledCard";
import SD from "constants/styleDefaults";
import { useState } from "react";
import axios from "axios";
import JSONPrettier from "components/JsonPrettier";
import UserStoryList from "components/UserStoryList";
import UserStoryExample from "components/UserStoryExample";
import ProjectHeader from "components/ProjectHeader";
import projectUrls from "constants/projectUrls";
import SEO from "components/SEO";

export default () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("upfile", file);

    try {
      const { data } = await axios.post("/api/fileMetaData", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResult(data);
    } catch (ex) {
      setResult(ex?.response?.data || { error: "Something went wrong" });
    }

    setLoading(false);
  };

  return (
    <Root>
      <SEO title="File Metadata Microservice" />
      <Child>
        <ProjectHeader title="API Project: File Metadata Microservice" />

        <Row gutter={[10, 10]}>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <UserStoryList
                data={projectUrls.FILE_METADATA_MICROSERVICE.stories}
              />
            </StyledCard>
            <StyledCard>
              <UserStoryExample
                data={projectUrls.FILE_METADATA_MICROSERVICE.examples}
              />
            </StyledCard>
          </Col>
          <Col {...SD.sizes.column}>
            <StyledCard>
              <h2>Upload a file</h2>
              <form onSubmit={submit}>
                <StyledInput
                  type="file"
                  name="upfile"
                  required
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    setResult(null);
                  }}
                />
                <Button type="primary" htmlType="submit" block>
                  Upload
                </Button>
              </form>
            </StyledCard>
            <br />
            {result && (
              <StyledCard>
                <h2>Result</h2>
                <Spin spinning={loading}>
                  <JSONPrettier data={result} />
                </Spin>
              </StyledCard>
            )}
          </Col>
        </Row>
      </Child>
    </Root>
  );
};

const Root = styled.div`
  height: calc(100vh - ${SD.sizes.header}px);
  overflow-y: auto;
  background-color: ${SD.colors.fileMetadataMicroservice};
`;

const Child = styled.div`
  width: 80vw;
  margin: auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 8pt;
  border: 1px solid lightgray;
`;
