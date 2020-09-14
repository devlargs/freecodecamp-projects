import { Table } from "antd";
import conversion from "constants/conversion";

export default ({ field }: { field: string }) => (
  <>
    {Object.keys(conversion[field]).length === 2 ? (
      <>
        {Object.keys(conversion[field]).map((q) => {
          return (
            <Table
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
