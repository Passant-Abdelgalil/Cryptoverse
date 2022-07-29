import React, { Fragment } from "react";
import { Result, Spin } from "antd";

const Wrapper = ({ isLoading, isError, children }) => {
  if (isLoading) return <Spin tip="Loading..."></Spin>;
  if (isError)
    return (
      <Result status="500" title="500" subTitle="Sorry, something went wrong" />
    );
  return <Fragment>{children}</Fragment>;
};

export default Wrapper;
