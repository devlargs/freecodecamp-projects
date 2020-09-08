import { useEffect } from "react";
import Select from "antd/lib/select";
import { loadUser, selectUsers } from "store/reducers/exercise";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const { Option } = Select;

type Props = {
  value?: string;
  onChange?: any;
  error?: string;
};

export default ({ value, onChange, error }: Props) => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Root>
      <StyledSelect
        showSearch
        placeholder="Select User"
        value={value}
        loading={loading}
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        clearIcon
      >
        {users.map((q) => (
          <Option value={q._id} key={q._id} style={{ height: 5 }}>
            {q.username}
          </Option>
        ))}
      </StyledSelect>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </Root>
  );
};

const Root = styled.div`
  margin-bottom: 1em;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  font-size: 16px;
  font-weight: normal;
`;
