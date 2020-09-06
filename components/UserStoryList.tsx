import List from "antd/lib/list";
import UserStoryCallout from "./UserStoryCallout";

export default ({ data }) => (
  <>
    <h2>User Stories:</h2>
    <List
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
