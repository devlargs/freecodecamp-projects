import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectComments, deleteBookById } from "store/reducers/books";
import { List, Spin, Alert, Popconfirm } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

export default () => {
  const dispatch = useDispatch();
  const { data, loading, error, currentBook } = useSelector(selectComments);

  console.log(data.comments);

  if (error) {
    return <Alert message="Failed to fetch book lists" type="error" showIcon />;
  }

  return (
    <>
      {currentBook && (
        <Card>
          <h4>
            {data.title} |
            <Popconfirm
              title="Are you sure delete this book?"
              onConfirm={() => dispatch(deleteBookById(currentBook))}
              okText="Yes"
              cancelText="No"
            >
              <a style={{ color: "#E74C3C" }}>
                {" "}
                <FontAwesomeIcon icon={faTrash} /> Remove book
              </a>
            </Popconfirm>
          </h4>
        </Card>
      )}
      <Root>
        {currentBook ? (
          <Spin spinning={loading}>
            <List
              bordered
              dataSource={data.comments || []}
              renderItem={(item: any) => (
                <List.Item>
                  <List.Item.Meta title={item.text} />
                  <div style={{ height: 1 }} />
                  <FontAwesomeIcon icon={faClock} />
                  &nbsp;
                  {dayjs(item?.updated_on).fromNow()}
                </List.Item>
              )}
            />
          </Spin>
        ) : (
          <Alert
            message="Info"
            description="Please select a book to show its comments"
            type="info"
            showIcon
          />
        )}
      </Root>
    </>
  );
};

const Root = styled.div`
  background-color: white;
  max-height: 70vh;
  overflow-y: auto;
`;

const Card = styled.div``;
