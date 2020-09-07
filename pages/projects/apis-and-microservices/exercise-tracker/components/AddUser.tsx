import { useForm } from "react-hook-form";
import styled from "styled-components";
import JsonPrettier from "components/JsonPrettier";
import { Button, Alert } from "antd";

export default () => {
  const { register, handleSubmit, errors } = useForm(); // initialize the hook
  const onSubmit = (data) => {
    console.log(data);
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
        <Button htmlType="submit" type="primary" block>
          Submit
        </Button>
      </form>
    </Root>
  );
};

const Root = styled.div``;
