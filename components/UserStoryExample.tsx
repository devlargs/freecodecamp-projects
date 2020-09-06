import styled from "styled-components";

interface StoryDetails {
  type: string;
  url: string;
}

type Props = {
  data: Array<StoryDetails>;
};

export default ({ data = [] }: Props) => {
  return (
    <>
      <h2>Example Usage</h2>
      <Anchor>
        {data.map((q: StoryDetails, i: number) => (
          <div key={i}>
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
