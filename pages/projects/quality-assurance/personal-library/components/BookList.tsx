import { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectBooks, loadBooks } from "store/reducers/books";
import { List } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(selectBooks);

  console.log(data);

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <Root>
      <StyledList
        bordered
        dataSource={data}
        renderItem={(item: any) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              }
            />
            <div style={{ height: 8 }} />
            <FontAwesomeIcon icon={faComments} /> {item?.commentcount || 0}{" "}
            {item?.commentcount > 1 ? "comments" : "comment"}
          </List.Item>
        )}
      />
    </Root>
  );
};

const Root = styled.div`
  background-color: white;
  max-height: calc(80vh - 100px);
  overflow-y: auto;
`;

const StyledList = styled(List)`
  cursor: pointer;
  .ant-list-item:hover {
    background-color: lightblue;
  }
`;
