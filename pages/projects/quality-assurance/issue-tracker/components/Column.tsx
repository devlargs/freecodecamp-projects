import { ReactSortable } from "react-sortablejs";
import styled from "styled-components";
import { Popconfirm, Tag } from "antd";

type Props = {
  title?: string;
  issues?: any[];
  prev?: string;
  next?: string;
  onMove?: (id: string, status: string) => void;
  onToggle?: (issue: any) => void;
  onDelete?: (id: string) => void;
};

export default ({
  title = "",
  issues = [],
  prev = "",
  next = "",
  onMove = () => {},
  onToggle = () => {},
  onDelete = () => {},
}: Props) => {
  const list = issues.map((q) => ({ ...q, id: q._id }));

  const setList = (updated: any[]) => {
    updated.forEach((item) => {
      if (item.status_text !== title) {
        onMove(item._id, title);
      }
    });
  };

  return (
    <Root>
      <Head>
        <h2>{title}</h2>
        <span>
          {issues.length} {issues.length === 1 ? "card" : "cards"}
        </span>
      </Head>
      <CardList>
        <ReactSortable
          list={list}
          setList={setList}
          group="issues"
          animation={150}
        >
          {list.map((q) => (
            <div className="card" key={q._id} data-id={q._id}>
              <p className="title">{q.issue_title}</p>
              {q.issue_text && <p className="text">{q.issue_text}</p>}
              <div className="meta">
                <Tag>{q.assigned_to || "unassigned"}</Tag>
                <Tag color={q.open ? "green" : "red"}>
                  {q.open ? "open" : "closed"}
                </Tag>
              </div>
              <div className="actions">
                <button
                  type="button"
                  title={prev ? `Move to ${prev}` : "No column to the left"}
                  disabled={!prev}
                  onClick={() => onMove(q._id, prev)}
                >
                  &#8592;
                </button>
                <button type="button" onClick={() => onToggle(q)}>
                  {q.open ? "Close" : "Reopen"}
                </button>
                <Popconfirm
                  title="Delete this issue?"
                  okText="Delete"
                  cancelText="Cancel"
                  onConfirm={() => onDelete(q._id)}
                >
                  <button type="button">Delete</button>
                </Popconfirm>
                <button
                  type="button"
                  title={next ? `Move to ${next}` : "No column to the right"}
                  disabled={!next}
                  onClick={() => onMove(q._id, next)}
                >
                  &#8594;
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
      </CardList>
    </Root>
  );
};

const Root = styled.div`
  width: 300px;
  border-radius: 5px;
  background-color: #1f2e3c;
  padding-bottom: 10px;
  align-self: flex-start;
`;

const Head = styled.div`
  padding: 10px 12px 6px 12px;

  h2 {
    color: white;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 0;
  }

  span {
    color: rgba(177, 255, 255, 0.4);
    font-size: 12px;
  }
`;

const CardList = styled.div`
  max-height: 70vh;
  overflow-y: auto;
  min-height: 60px;
  padding: 0 5px;

  .card {
    padding: 10px;
    background-color: #2c3f51;
    margin: 5px 0;
    border-radius: 5px;
    cursor: grab;
  }

  .title {
    color: white;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .text {
    font-size: 13px;
    margin-bottom: 8px;
    color: rgba(227, 251, 255, 0.75);
  }

  .meta {
    margin-bottom: 8px;
  }

  .actions {
    display: flex;
    gap: 6px;

    button {
      flex: 1;
      background-color: transparent;
      border: 1px solid rgba(227, 251, 255, 0.25);
      border-radius: 4px;
      color: rgba(227, 251, 255, 0.75);
      font-size: 12px;
      padding: 2px 0;
      cursor: pointer;
    }

    button:hover:enabled {
      border-color: rgba(227, 251, 255, 0.6);
      color: white;
    }

    button:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;
