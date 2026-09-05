import { useState } from "react";
import { Button, Input, Modal } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

type Props = {
  visible?: boolean;
  onCancel?: () => void;
  onCreate?: (values: any) => Promise<boolean>;
};

const EMPTY = {
  issue_title: "",
  issue_text: "",
  created_by: "",
  assigned_to: "",
};

export default ({
  visible = false,
  onCancel = () => {},
  onCreate = async () => false,
}: Props) => {
  const [values, setValues] = useState(EMPTY);
  const [saving, setSaving] = useState(false);

  const update = (field: string) => (e: any) =>
    setValues((prev) => ({ ...prev, [field]: e.target.value }));

  const submit = async (e: any) => {
    e.preventDefault();
    setSaving(true);
    const created = await onCreate(values);
    setSaving(false);
    if (created) {
      setValues(EMPTY);
    }
  };

  return (
    <Modal
      title="New issue"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      destroyOnClose
    >
      <form onSubmit={submit}>
        <Field>
          <label>Title *</label>
          <Input
            value={values.issue_title}
            onChange={update("issue_title")}
            placeholder="Something is broken"
            required
          />
        </Field>
        <Field>
          <label>Description *</label>
          <TextArea
            rows={3}
            value={values.issue_text}
            onChange={update("issue_text")}
            placeholder="What happened?"
            required
          />
        </Field>
        <Field>
          <label>Created by *</label>
          <Input
            value={values.created_by}
            onChange={update("created_by")}
            placeholder="Your name"
            required
          />
        </Field>
        <Field>
          <label>Assigned to</label>
          <Input
            value={values.assigned_to}
            onChange={update("assigned_to")}
            placeholder="Optional"
          />
        </Field>
        <Button type="primary" htmlType="submit" loading={saving} block>
          Create issue
        </Button>
      </form>
    </Modal>
  );
};

const Field = styled.div`
  margin-bottom: 12px;

  label {
    display: block;
    margin-bottom: 4px;
    font-size: 13px;
  }
`;
