import { useForm } from "react-hook-form";
import styled from "styled-components";
import JsonPrettier from "components/JsonPrettier";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUsers } from "store/reducers/exercise";
import { useEffect, useState } from "react";

export default () => {
  const { loading, error } = useSelector(selectUsers);
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm(); // initialize the hook

  useEffect(() => {
    if (!loading && submitted) {
      message[error ? "error" : "success"](
        error ? error : "User successfully added"
      );
      reset();
      setSubmitted(false);
    }
  }, [loading, error, submitted]);

  const onSubmit = (data: any) => {
    dispatch(addUser(data));
    setSubmitted(true);
  };

  return (
    <Root>
      <JsonPrettier data="[POST] /api/exercise/new-user" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="username"
          ref={register}
          placeholder="Please Enter Username"
          required
        />{" "}
        <Button htmlType="submit" type="primary" block disabled={loading}>
          Submit
        </Button>
      </form>
    </Root>
  );
};

const Root = styled.div``;
