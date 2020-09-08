import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import JsonPrettier from "components/JsonPrettier";
import { Button, message, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addExercise, selectExercises } from "store/reducers/exercise";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import UserSelect from "./UserSelect";

export default () => {
  const { loading, error } = useSelector(selectExercises);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue, getValues } = useForm();

  useEffect(() => {
    register({ name: "userId" }, { required: true });
    register({ name: "date" });
  }, [register]);

  useEffect(() => {
    if (!loading && submitted) {
      message[error ? "error" : "success"](
        error ? error : "Exercise successfully added"
      );
      reset();
      setSubmitted(false);
    }
  }, [loading, error, submitted]);

  const onSubmit = (data: any) => {
    const temp = { ...data };
    if (temp.date) {
      temp.date = dayjs(temp.date).format("YYYY-MM-DD");
    }

    dispatch(addExercise(data));
    setSubmitted(true);
  };

  return (
    <Root>
      <JsonPrettier data="[POST] /api/exercise/new-user" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <UserSelect
          onChange={(e) => setValue("userId", e)}
          value={getValues("userId")}
        />

        <input
          type="text"
          name="description"
          ref={register}
          placeholder="Enter Description"
          required
        />

        <input
          type="number"
          name="duration"
          ref={register}
          placeholder="Enter Duration"
          required
        />

        <StyledPicker
          value={getValues("date")}
          placeholder="Select date (optional)"
          style={{ width: "100%", marginBottom: 16, fontSize: 20 }}
          onChange={(e: any) => setValue("date", e)}
        />

        <div className="add-user-btn">
          <Button
            htmlType="submit"
            type="primary"
            block
            disabled={loading}
            loading={loading}
          >
            Add Exercise
          </Button>
        </div>
      </form>
    </Root>
  );
};

const Root = styled.div`
  .add-user-btn {
    width: 50%;
    margin: auto;
  }
`;

const StyledPicker = styled(DatePicker)`
  width: 100%;
  margin-bottom: 16px;
  input {
    font-size: 16px !important;
  }
`;
