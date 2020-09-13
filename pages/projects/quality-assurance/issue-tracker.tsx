import { useState, useEffect } from "react";
import styled from "styled-components";
import SD from "constants/styleDefaults";
import { ReactSortable } from "react-sortablejs";
import { selectCategories, loadCategories } from "store/reducers/issues";
import { useDispatch, useSelector } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  const { data: categories, loading, error } = useSelector(selectCategories);

  useEffect(() => {
    dispatch(loadCategories());
  }, [dispatch]);

  const [state, setState] = useState([
    { id: 1, name: "golfo" },
    { id: 2, name: "fiona" },
  ]);

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
            <ReactSortable list={state} setList={setState}>
              {state.map((item) => (
                <div className="lists" key={item.id}>
                  <p>{item.name}</p>
                </div>
              ))}
            </ReactSortable>
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
  overflow-y: hidden;
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

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  height: 49px;
`;
