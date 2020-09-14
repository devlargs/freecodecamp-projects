import { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectComments,
  deleteBookById,
  addComment,
} from "store/reducers/books";
import { List, Spin, Alert, Popconfirm, Form, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faPlus,
  faTrash,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";

export default () => {
  const dispatch = useDispatch();
  const { data, loading, error, currentBook } = useSelector(selectComments);
  const [addCommentForm, setAddCommentForm] = useState(false);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!loading) {
      setComment("");
      setAddCommentForm(false);
    }
  }, [loading]);

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      addComment({
        id: currentBook,
        text: comment,
      })
    );
  };

  if (error) {
    return <Alert message="Failed to fetch book lists" type="error" showIcon />;
  }

  return (
    <>
      {currentBook && (
        <div>
          <h3>{data.title}</h3>
          <Popconfirm
            title="Are you sure delete this book?"
            onConfirm={() => dispatch(deleteBookById(currentBook))}
            okText="Yes"
            cancelText="No"
          >
            <Button type="default" style={{ color: "darkred" }}>
              <FontAwesomeIcon icon={faTrash} />
              &nbsp;Remove book
            </Button>
          </Popconfirm>
          <Button
            type="default"
            style={{ color: "darkgreen", marginLeft: 5 }}
            onClick={() => setAddCommentForm((q) => !q)}
          >
            {" "}
            <FontAwesomeIcon
              icon={!addCommentForm ? faPlus : faTimes}
            /> &nbsp; {!addCommentForm ? "Add Comment" : "Cancel"}
          </Button>
          {addCommentForm && (
            <AddBookForm>
              <form onSubmit={submit}>
                <input
                  type="text"
                  placeholder="Write a comment.."
                  required
                  onChange={(e) => setComment(e.target.value)}
                  value={comment}
                />
                <Button block type="primary" htmlType="submit">
                  Submit
                </Button>
              </form>
            </AddBookForm>
          )}
        </div>
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
            description="Please select a book"
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
  max-height: 60vh;
  overflow-y: auto;
  margin-top: 10px;
`;

const AddBookForm = styled.div`
  margin: 10px 0 0 0;
  background-color: white;
  padding: 10px;
`;
