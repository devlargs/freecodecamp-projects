import { Table } from "antd";
import conversion from "constants/conversionArray";
import styled from "styled-components";

export default ({ field }: { field: string }) => (
  <>
    {Object.keys(conversion[field]).length === 2 ? (
      <>
        {Object.keys(conversion[field]).map((q) => {
          return (
            <StyledTable
              key={q}
              columns={
                q === "first"
                  ? [
                      { title: "Metric", key: "m", dataIndex: "m" },
                      { title: "Imperial", key: "i", dataIndex: "i" },
                    ]
                  : [
                      { title: "Imperial", key: "i", dataIndex: "i" },
                      { title: "Metric", key: "m", dataIndex: "m" },
                    ]
              }
              style={{ marginBottom: 10 }}
              bordered
              dataSource={conversion[field][q]}
              pagination={false}
              rowKey="m"
            />
          );
        })}
      </>
    ) : (
      <></>
    )}
  </>
);

const StyledTable = styled(Table)`
  thead[class*="ant-table-thead"] th {
    background-color: #041429 !important;
    color: white;
  }
`;
