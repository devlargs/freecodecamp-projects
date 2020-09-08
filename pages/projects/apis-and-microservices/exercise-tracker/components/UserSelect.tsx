import { useEffect } from "react";
import Select from "antd/lib/select";
import { loadUser, selectUsers } from "store/reducers/exercise";
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

type Props = {
  value?: string;
  onChange?: any;
  onSearch?: any;
};

export default ({ value, onChange, onSearch }: Props) => {
  const dispatch = useDispatch();
  const { loading, users } = useSelector(selectUsers);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Select
      showSearch
      style={{ width: "100%", marginBottom: "1em" }}
      placeholder="Select a person"
      value={value}
      loading={loading}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      clearIcon
    >
      {users.map((q) => (
        <Option value={q._id} key={q._id}>
          {q.username}
        </Option>
      ))}
    </Select>
  );
};
