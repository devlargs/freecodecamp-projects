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
    <h2>User Stories</h2>
    <StyledList
      bordered
      dataSource={data}
      renderItem={(item: any) => (
        <List.Item>
          <div
            dangerouslySetInnerHTML={{
              __html: `<div style="display: flex">
              <div style="align-self: center; padding-right: 20px;">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"  width="20" height="20">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            
            </svg>
              </div>
            <div>
            ${item}
            </div>
              </div>`,
            }}
          />
        </List.Item>
      )}
    />
    <br />
    <UserStoryCallout />
  </>
);
