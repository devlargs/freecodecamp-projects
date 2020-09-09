import styled from "styled-components";
import SD from "constants/styleDefaults";

export default () => {
  return (
    <Root>
      <AddBookStyle>1</AddBookStyle>
      <BookListStyle>2</BookListStyle>
      <BookCommentsStyle>3</BookCommentsStyle>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.personalLibrary};
  height: calc(100vh - ${SD.sizes.header}px);
  display: flex;
  div {
    width: 900px;
    padding: 1em;
    border: 1px solid black;
    overflow-x: scroll;
  }
`;

const AddBookStyle = styled.div`
  background-color: azure;
`;

const BookListStyle = styled.div`
  background-color: azure;
`;

const BookCommentsStyle = styled.div`
  background-color: azure;
`;
