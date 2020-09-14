import styled from "styled-components";
import SD from "constants/styleDefaults";
import BookList from "./components/BookList";
import CommentList from "./components/CommentList";
import SEO from "components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faComments } from "@fortawesome/free-solid-svg-icons";

export default () => {
  return (
    <Root>
      <SEO title="Personal Library" />
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: 10 }}>
        Personal Library
      </h1>
      <Content>
        <AddBookStyle>1</AddBookStyle>
        <BookListStyle>
          <h3>
            <FontAwesomeIcon icon={faBook} /> Book List
          </h3>
          <BookList />
        </BookListStyle>
        <BookCommentsStyle>
          <h3>
            <FontAwesomeIcon icon={faComments} /> Comment List
          </h3>
          <CommentList />
        </BookCommentsStyle>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  background-color: ${SD.colors.personalLibrary};
  height: calc(100vh - ${SD.sizes.header}px);
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const AddBookStyle = styled.div`
  flex: 1;
  padding: 1em;
  background-color: ${SD.colors.personalLibraryGrids};
  margin: 10px;
`;

const BookListStyle = styled.div`
  margin: 10px;
  padding: 1em;
  flex: 2;
  background-color: ${SD.colors.personalLibraryGrids};
  max-height: 80vh;
  h3 {
    color: black;
    font-weight: 400;
  }
`;

const BookCommentsStyle = styled.div`
  margin: 10px;
  padding: 1em;
  flex: 2;
  background-color: ${SD.colors.personalLibraryGrids};
  h3 {
    color: black;
    font-weight: 400;
  }
`;
