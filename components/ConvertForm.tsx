import { Form, Button, Input, Select, Alert } from "antd";
import styled from "styled-components";
import conversion from "constants/conversionUnits";
import { useState } from "react";
import convert from "convert-units";

const { Option } = Select;

export default ({ type }: { type: string }) => {
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [num, setNum] = useState(null);
  const [answer, setAnswer] = useState("");

  const submit = () => {
    try {
      const converted = convert(+num)
        .from(first)
        .to(second);
      setAnswer(`${num} ${first} is equivalent to ${converted} ${second}`);
    } catch (ex) {
      setAnswer(`Conversion of "${first}" or "${second}" not yet supported`);
    }
  };

  return (
    <Root>
      <Form layout="inline" onFinish={submit}>
        <Form.Item>
          <Input
            type="number"
            placeholder="Enter amount"
            required
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
              setAnswer("");
            }}
          />
        </Form.Item>
        <Form.Item>
          <Select
            value={first}
            onChange={(e) => {
              setFirst(e);
              setAnswer("");
            }}
            placeholder="Select unit"
            style={{ width: 200 }}
          >
            {conversion[type].map((q) => (
              <Option key={q.k} value={q.v}>
                {q.k}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Select
            placeholder="Select unit"
            value={second}
            onChange={(e) => {
              setAnswer("");
              setSecond(e);
            }}
            style={{ width: 200 }}
          >
            {conversion[type].map((q) => (
              <Option key={q.k} value={q.v}>
                {q.k}
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Convert
          </Button>
        </Form.Item>
      </Form>

      {answer && (
        <>
          <Alert
            message={answer}
            type={answer.includes("not yet") ? "error" : "success"}
            showIcon
          />
          <br />
        </>
      )}
    </Root>
  );
};

const Root = styled.div`
  background-color: #041429;
  padding: 10px 10px 0 10px;
`;
