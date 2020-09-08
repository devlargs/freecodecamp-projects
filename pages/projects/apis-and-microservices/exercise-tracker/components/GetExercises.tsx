import { Empty, Row, Col, Form, Input, Table, DatePicker } from "antd";
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
import dayjs from "dayjs";

type Props = {
  isActive: boolean;
};

export default ({ isActive }: Props) => {
  const { loading, data } = useSelector(selectExercises);
  const dispatch = useDispatch();

  const { register, setValue, getValues, errors, reset } = useForm();

  const values = getValues();

  useEffect(() => {
    register({ name: "userId" }, { required: true });
    register({ name: "limit" }, { required: true });
    register({ name: "from" }, { required: true });
    register({ name: "to" }, { required: true });
  }, []);

  useEffect(() => {
    if (!isActive) {
      // resetExercises();
      // setValue("userId", null);
      // setValue("limit", null);
      // setValue("from", null);
      // setValue("to", null);
      reset();
    }
  }, [isActive]);

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
                value={getValues("limit")}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="From">
              <DatePicker
                disabled={!Boolean(values.userId)}
                style={{ width: "100%" }}
                onChange={(e: any) => loadExerciseLog("from", e)}
                value={getValues("from")}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="To">
              <DatePicker
                disabled={!Boolean(values.userId)}
                style={{ width: "100%" }}
                onChange={(e: any) => loadExerciseLog("to", e)}
                value={getValues("to")}
              />
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
