import { useForm } from "react-hook-form";
import styled from "styled-components";
import JsonPrettier from "components/JsonPrettier";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUsers } from "store/reducers/exercise";
import { useEffect } from "react";

export default () => {
  const { loading, error } = useSelector(selectUsers);

  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm(); // initialize the hook
  const onSubmit = (data: any) => {
    dispatch(addUser(data));
    message[error ? "error" : "success"](
      error ? error : "User successfully added"
    );
    reset();
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
