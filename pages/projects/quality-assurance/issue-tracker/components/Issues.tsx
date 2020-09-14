import { useEffect } from "react";
import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadIssueByStatus, selectIssueByStatus } from "store/reducers/issues";
import { Spin } from "antd";

export default ({ id }: { id: string }) => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(selectIssueByStatus(id));
  console.log(data);

  useEffect(() => {
    dispatch(loadIssueByStatus(id));
  }, []);

  return (
    <Spin spinning={loading}>
      <Lists>
        <ReactSortable
          list={[...data]}
          group="shared"
          setList={(e) => console.log(e)}
        >
          {[...data].map((item) => (
            <div className="lists" key={item._id}>
              <p>{item.issue_title}</p>
            </div>
          ))}
        </ReactSortable>
      </Lists>
    </Spin>
  );
};
const Lists = styled.div`
  max-height: 75vh;
  overflow: auto;
  .lists {
    padding: 10px;
    background-color: #2c3f51;
    margin: 5px;
    border-radius: 5px;
    color: white;
    p {
      font-size: 14px;
      margin-bottom: 0;
      color: rgba(227, 251, 255, 0.75);
    }
  }
`;
