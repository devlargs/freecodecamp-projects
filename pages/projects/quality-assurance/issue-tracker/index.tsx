import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Button, Input, message, Spin } from "antd";
import SD from "constants/styleDefaults";
import SEO from "components/SEO";
import COLUMNS, { DEFAULT_PROJECT } from "constants/issueColumns";
import Column from "./components/Column";
import IssueForm from "./components/IssueForm";

const { Search } = Input;

export default () => {
  const [project, setProject] = useState(DEFAULT_PROJECT);
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const load = async (name: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/api/issues/${name}`);
      setIssues(Array.isArray(data) ? data : []);
    } catch (ex) {
      setIssues([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    load(project);
  }, []);

  const columnOf = (issue: any) =>
    COLUMNS.includes(issue.status_text) ? issue.status_text : COLUMNS[0];

  const move = async (id: string, status: string) => {
    if (!status) {
      return;
    }
    setIssues((prev) =>
      prev.map((q: any) => (q._id === id ? { ...q, status_text: status } : q))
    );
    await axios.put(`/api/issues/${project}`, { _id: id, status_text: status });
    load(project);
  };

  const toggle = async (issue: any) => {
    await axios.put(`/api/issues/${project}`, {
      _id: issue._id,
      open: !issue.open,
    });
    load(project);
  };

  const remove = async (id: string) => {
    await axios.delete(`/api/issues/${project}`, { data: { _id: id } });
    message.success("Issue deleted");
    load(project);
  };

  const create = async (values: any) => {
    const { data } = await axios.post(`/api/issues/${project}`, {
      ...values,
      status_text: COLUMNS[0],
    });

    if (data.error) {
      message.error(data.error);
      return false;
    }

    message.success("Issue created");
    setShowForm(false);
    load(project);
    return true;
  };

  return (
    <Root>
      <SEO title="Issue Tracker" />
      <Header>
        <h1>Issue Tracker</h1>
        <Controls>
          <Search
            defaultValue={project}
            enterButton="Open"
            placeholder="Project name"
            onSearch={(name: string) => {
              const next = name.trim() || DEFAULT_PROJECT;
              setProject(next);
              load(next);
            }}
          />
          <Button type="primary" onClick={() => setShowForm(true)}>
            New issue
          </Button>
        </Controls>
      </Header>
      <Spin spinning={loading}>
        <Board>
          {COLUMNS.map((title, i) => (
            <Column
              key={title}
              title={title}
              prev={COLUMNS[i - 1] || ""}
              next={COLUMNS[i + 1] || ""}
              issues={issues.filter((q: any) => columnOf(q) === title)}
              onMove={move}
              onToggle={toggle}
              onDelete={remove}
            />
          ))}
        </Board>
      </Spin>
      <IssueForm
        visible={showForm}
        onCancel={() => setShowForm(false)}
        onCreate={create}
      />
    </Root>
  );
};

const Root = styled.div`
  height: calc(100vh - ${SD.sizes.header}px);
  background-color: #1b2126;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 12px 16px;

  h1 {
    color: white;
    font-size: 1.4rem;
    margin: 0;
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 10px;

  .ant-input-search {
    width: 260px;
  }

  @media screen and (max-width: 520px) {
    .ant-input-search {
      width: 160px;
    }
  }
`;

const Board = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 0 16px 16px 16px;
  overflow-x: auto;
  height: calc(100vh - ${SD.sizes.header}px - 70px);

  > * {
    flex: 0 0 auto;
  }
`;
