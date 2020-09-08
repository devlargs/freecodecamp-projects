import Table from "antd/lib/table";
import Button from "antd/lib/button";
import styled from "styled-components";
import {
  loadExercises,
  selectExercises,
  resetExercises,
} from "store/reducers/exercise";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import JsonPrettier from "components/JsonPrettier";
import dayjs from "dayjs";
import UserSelect from "./UserSelect";
import { Empty } from "antd";

export default () => {
  const { loading, error, data } = useSelector(selectExercises);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    getValues,
    errors,
  } = useForm();

  useEffect(() => {
    dispatch(resetExercises());
    register({ name: "userId" }, { required: true });
  }, []);

  const onSubmit = (data: any) => {
    dispatch(loadExercises(data));
  };

  const columns = [
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (e: string) => new Date(e).toDateString(),
    },
  ];

  return (
    <Root>
      <JsonPrettier data="[GET] /api/exercise/log?{userId}[&from][&to][&limit]" />
      <form>
        <UserSelect
          onChange={(e) => {
            setValue("userId", e);
            dispatch(loadExercises(getValues() as any));
          }}
          value={getValues("userId")}
          error={errors.userId && "User is required"}
        />

        {/* <div className="add-user-btn">
          <Button
            htmlType="submit"
            type="primary"
            block
            disabled={loading}
            loading={loading}
          >
            Fetch Exercise Logs
          </Button>
        </div>
        <div className="add-user-btn">
          <Button
            onClick={() => dispatch(resetExercises())}
            type="primary"
            block
            disabled={loading}
            loading={loading}
          >
            Reset
          </Button>
        </div> */}
      </form>

      <StyledTable
        dataSource={data.log}
        {...{ loading, columns }}
        pagination={false}
        rowKey="_id"
      />
    </Root>
  );
};

const Root = styled.div`
  .add-user-btn {
    width: 50%;
    margin: auto;
    padding-bottom: 1em;
  }
`;

const StyledTable = styled(Table)`
  height: 350px;
  overflow-y: auto;
`;
