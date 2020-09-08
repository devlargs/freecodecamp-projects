import { useForm, Controller } from "react-hook-form";
import styled from "styled-components";
import JsonPrettier from "components/JsonPrettier";
import { Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addUser, selectUsers } from "store/reducers/exercise";
import { useEffect, useState } from "react";
import UserSelect from "./UserSelect";

export default () => {
  // const { loading, error } = useSelector(selectUsers);
  // const [submitted, setSubmitted] = useState(false);

  // const dispatch = useDispatch();
  const { register, handleSubmit, reset, setValue, control } = useForm();

  useEffect(() => {
    register({ name: "userId" }, { required: true });
  }, [register]);

  // useEffect(() => {
  //   if (!loading && submitted) {
  //     message[error ? "error" : "success"](
  //       error ? error : "User successfully added"
  //     );
  //     reset();
  //     setSubmitted(false);
  //   }
  // }, [loading, error, submitted]);

  const onSubmit = (data: any) => {
    console.log(data);
    // console.log(data);
    // dispatch(addUser(data));
    // setSubmitted(true);
  };

  // function onChange(value) {
  //   console.log(`selected ${value}`);
  // }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }

  return (
    <Root>
      <JsonPrettier data="[POST] /api/exercise/new-user" />
      <form
        onSubmit={
          handleSubmit(onSubmit)
          // console.log("gago")
        }
      >
        <UserSelect
          onChange={(e) => setValue("userId", e)}
          onSearch={onSearch}
        />

        {/* <input
          type="text"
          name="uerId"
          ref={register}
          placeholder="Please Enter Username"
          // required
        /> */}
        {/* {" "}
        <input
          type="text"
          name="descrition"
          ref={register}
          placeholder="Please Enter Username"
          required
        />{" "}
        <input
          type="text"
          name="username"
          ref={register}
          placeholder="Please Enter Username"
          required
        />{" "}
        <input
          type="text"
          name="username"
          ref={register}
          placeholder="Please Enter Username"
          required
        />{" "} */}
        <div className="add-user-btn">
          <Button
            htmlType="submit"
            type="primary"
            block
            // disabled={loading}
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
