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
import UserSelect from "./UserSelect";
import { Empty, Row, Col, Form, Input, Table } from "antd";

export default () => {
  const { loading, data } = useSelector(selectExercises);
  const dispatch = useDispatch();

  const { register, setValue, getValues, errors } = useForm();

  const values = getValues();

  useEffect(() => {
    dispatch(resetExercises());
    register({ name: "userId" }, { required: true });
    register({ name: "limit" }, { required: true });
  }, []);

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

  const loadExerciseLog = (key: string, value: string) => {
    setValue(key, value);
    dispatch(loadExercises(getValues() as any));
  };

  return (
    <Root>
      <JsonPrettier data="[GET] /api/exercise/log?{userId}[&from][&to][&limit]" />
      <form>
        <UserSelect
          onChange={(e: string) => loadExerciseLog("userId", e)}
          value={getValues("userId")}
          error={errors.userId && "User is required"}
        />
        <Row gutter={24}>
          <Col span={8}>
            <Form.Item label="Limit">
              <Input
                disabled={!Boolean(values.userId)}
                type="number"
                placeholder="Enter Limit"
                onChange={(e) => {
                  loadExerciseLog("limit", e.target.value);
                }}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="From">
              <Input type="number" placeholder="Enter Limit" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="To">
              <Input type="number" placeholder="Enter Limit" />
            </Form.Item>
          </Col>
        </Row>
      </form>

      {values?.userId ? (
        data.log.length ? (
          <StyledTable
            dataSource={data.log}
            {...{ loading, columns }}
            pagination={false}
            rowKey="_id"
          />
        ) : (
          <Empty description="No data found" />
        )
      ) : (
        <></>
      )}
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
