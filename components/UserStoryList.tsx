import List from "antd/lib/list";
import UserStoryCallout from "./UserStoryCallout";
import styled from "styled-components";

const StyledList = styled(List)`
  .ant-list-items {
    word-break: break-word;
  }
`;

export default ({ data }) => (
  <>
    <h2>User Stories:</h2>
    <StyledList
      bordered
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item>
          <div
            dangerouslySetInnerHTML={{
              __html: item,
            }}
          />
        </List.Item>
      )}
    />
    <br />
    <UserStoryCallout />
  </>
);
