import { Form, Button, Input, Select } from "antd";
import styled from "styled-components";
import conversion from "constants/conversionUnits";

const { Option } = Select;

export default ({ type }: { type: string }) => {
  return (
    <Root>
      <Form layout="inline">
        <Form.Item>
          <Input type="number" placeholder="Enter amount" required />
        </Form.Item>
        <Form.Item>
          <Select style={{ width: 180 }}>
            {conversion[type].map((q) => (
              <Option value={q.v}>{q.k}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Select style={{ width: 180 }}>
            {conversion[type].map((q) => (
              <Option value={q.v}>{q.k}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Root>
  );
};

const Root = styled.div`
  background-color: #e7d7c1;
  padding: 10px 10px 0 10px;
`;
