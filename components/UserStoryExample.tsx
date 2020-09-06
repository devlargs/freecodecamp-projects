import styled from "styled-components";

type Props = {
  data: Array<{
    type: string;
    url: string;
  }>;
};

export default ({ data = [] }: Props) => {
  return (
    <>
      <h2>Example Usage</h2>
      <Anchor>
        {data.map((q) => (
          <div>
            <a href={q.url} target="_blank">
              [{q.type.toUpperCase()}] {q.url}
            </a>
          </div>
        ))}
      </Anchor>
    </>
  );
};

const Anchor = styled.div`
  text-align: center;
`;
