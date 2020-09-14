import styled from "styled-components";
import SD from "constants/styleDefaults";
import BookList from "./components/BookList";

export default () => {
  return (
    <Root>
      <AddBookStyle>1</AddBookStyle>
      <BookListStyle>
        <BookList />
      </BookListStyle>
      <BookCommentsStyle>3</BookCommentsStyle>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.personalLibrary};
  // height: calc(100vh - ${SD.sizes.header}px);
  display: flex;
  flex-wrap: wrap;
  // div {
  //   padding: 1em;
  //   border: 1px solid black;
  // }
`;

const AddBookStyle = styled.div`
  flex: 1;
  padding: 1em;
  background-color: red;
  margin: 10px;
`;

const BookListStyle = styled.div`
  margin: 10px;
  padding: 1em;
  flex: 2;
  background-color: lightgray;
`;

const BookCommentsStyle = styled.div`
  margin: 10px;
  padding: 1em;
  flex: 2;
  background-color: azure;
`;
