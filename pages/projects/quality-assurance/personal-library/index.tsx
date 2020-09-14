import styled from "styled-components";
import SD from "constants/styleDefaults";
import SEO from "components/SEO";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faComments,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import BookList from "./components/BookList";
import CommentList from "./components/CommentList";
import AddBookForm from "./components/AddBookForm";

export default () => {
  return (
    <Root>
      <SEO title="Personal Library" />
      <h1 style={{ textAlign: "center", margin: 0, paddingTop: 10 }}>
        Personal Library
      </h1>
      <Content>
        <AddBookStyle>
          <h3>
            <FontAwesomeIcon icon={faPlusSquare} /> Add Book
          </h3>
          <AddBookForm />
        </AddBookStyle>
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
  height: 100%;
  padding: 1em;
  background-color: ${SD.colors.personalLibraryGrids};
  margin: 10px;
`;

const BookListStyle = styled.div`
  margin: 10px;
  padding: 1em;
  height: 100%;
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
  height: 100%;
  background-color: ${SD.colors.personalLibraryGrids};
  h3 {
    color: black;
    font-weight: 400;
  }
`;
