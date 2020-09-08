import Table from "antd/lib/table";
import styled from "styled-components";
import { loadUser, selectUsers } from "store/reducers/exercise";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import JsonPrettier from "components/JsonPrettier";

export default () => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const columns = [
    {
      title: "User ID",
      dataIndex: "_id",
      key: "_id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
  ];

  return (
    <Root>
      <JsonPrettier data="[GET] /api/exercise/users" />
      <StyledTable
        loading={loading}
        dataSource={users}
        columns={columns}
        pagination={false}
        rowKey="_id"
      />
    </Root>
  );
};

const Root = styled.div``;

const StyledTable = styled(Table)`
  height: 350px;
  overflow-y: auto;
`;
