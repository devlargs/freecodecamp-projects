import { useEffect } from "react";
import styled from "styled-components";
import SD from "constants/styleDefaults";
import SEO from "components/SEO";
import { selectCategories, loadCategories } from "store/reducers/issues";
import { useDispatch, useSelector } from "react-redux";
import { notification, Spin } from "antd";
import Issues from "./components/Issues";

export default () => {
  const dispatch = useDispatch();
  const { data: categories, loading: categoryLoading } = useSelector(
    selectCategories
  );

  useEffect(() => {
    notification.info({
      message: `WIP`,
      description:
        "Hi there! This screen is still in progress but the API for this is already functional.",
      placement: "bottomRight",
    });
    dispatch(loadCategories());
  }, [dispatch]);

  const addCategoryComponent = "<AddCategoryComponent>";

  return (
    <Root>
      <SEO title="Issue Tracker" />
      <Header>
        <div></div>
        <div>
          <h1>Issue Tracker (WIP)</h1>
        </div>
        <div></div>
      </Header>
      <Spin spinning={categoryLoading}>
        <Content>
          {categories.length ? (
            <>
              {categories.map((q: any) => (
                <Category key={q._id}>
                  <CategoryHeader>
                    <CategoryTitle>{q.title || "no title"}</CategoryTitle>
                    <CategoryCount>5 cards</CategoryCount>
                  </CategoryHeader>
                  <Issues id={`${q._id}`} />
                </Category>
              ))}
            </>
          ) : (
            <p style={{ color: "white" }}>{addCategoryComponent}</p>
          )}
        </Content>
      </Spin>
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
  border-radius: 5px;
  background-color: #1f2e3c;
  height: 100%;
`;

const CategoryHeader = styled.div`
  padding: 10px;
`;

const CategoryTitle = styled.p`
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 0;
  ::first-letter {
    text-transform: uppercase;
  }
`;

const CategoryCount = styled.div`
  color: rgb(177, 255, 255, 0.4);
  font-size: 12px;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  height: 49px;
  div:nth-child(2) {
    display: grid;
    place-items: center;
    h1 {
      text-align: center;
      color: white;
      margin: 0;
      padding: 0;
    }
  }
`;
