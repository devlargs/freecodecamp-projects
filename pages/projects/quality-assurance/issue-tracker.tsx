import styled from "styled-components";
import SD from "constants/styleDefaults";

export default () => {
  return (
    <Root>
      <Header></Header>
      <Content>
        <Category>
          <CategoryHeader>
            <CategoryTitle>To Do</CategoryTitle>
            <CategoryCount>5 cards</CategoryCount>
          </CategoryHeader>
          <Lists>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
          </Lists>
        </Category>

        <Category>
          <CategoryHeader>
            <CategoryTitle>To Do</CategoryTitle>
            <CategoryCount>5 cards</CategoryCount>
          </CategoryHeader>
          <Lists>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
          </Lists>
        </Category>

        <Category>
          <CategoryHeader>
            <CategoryTitle>To Do</CategoryTitle>
            <CategoryCount>5 cards</CategoryCount>
          </CategoryHeader>
          <Lists>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
          </Lists>
        </Category>

        <Category>
          <CategoryHeader>
            <CategoryTitle>To Do</CategoryTitle>
            <CategoryCount>5 cards</CategoryCount>
          </CategoryHeader>
          <Lists>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
            <div className="lists">
              <p>Dance with my father</p>
            </div>
          </Lists>
        </Category>
      </Content>
    </Root>
  );
};

const Root = styled.div`
  height: calc(100vh - ${SD.sizes.header}px);
  width: 100vw;
  background-color: #1b2126;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  padding: 10px 0 10px 0;
  overflow-x: auto;
  > * {
    flex: 0 0 auto;
    margin-left: 10px;
  }
  &::after {
    content: "";
    flex: 0 0 10px;
  }
`;

const Category = styled.div`
  width: 300px;
  padding-bottom: 10px;
  border-radius: 10px;
  background-color: #1f2e3c;
`;

const CategoryHeader = styled.div`
  padding: 10px;
`;

const CategoryTitle = styled.div`
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

const CategoryCount = styled.div`
  color: rgb(177, 255, 255, 0.4);
  font-size: 12px;
`;

const Lists = styled.div`
  .lists {
    padding: 10px;
    background-color: #2c3f51;
    margin: 5px;
    border-radius: 5px;
    color: white;
    p {
      font-size: 14px;
      margin-bottom: 0;
      // padding-left: 5px;
      color: rgba(227, 251, 255, 0.75);
    }
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  height: 49px;
`;
