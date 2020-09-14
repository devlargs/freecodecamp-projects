import { useState, useEffect } from "react";
import { Button } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addBook, selectBooks } from "store/reducers/books";

export default () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const { loading } = useSelector(selectBooks);

  const submit = (e) => {
    e.preventDefault();
    dispatch(addBook(title));
  };

  useEffect(() => {
    if (!loading) {
      setTitle("");
    }
  }, [loading]);

  return (
    <Root>
      <form onSubmit={submit}>
        <input
          type="text"
          placeholder="Enter Book Title"
          required
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Button htmlType="submit" type="primary" block>
          Add
        </Button>
      </form>
    </Root>
  );
};

const Root = styled.div`
  background-color: white;
  padding: 10px;
`;
