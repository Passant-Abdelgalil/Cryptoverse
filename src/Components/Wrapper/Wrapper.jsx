import React, { Fragment } from "react";
import { Result, Spin } from "antd";

const Wrapper = ({ isLoading, isError, error, children }) => {
  if (isLoading) return <Spin tip="Loading..."></Spin>;
  if (isError)
    return (
      <Result
        status={error?.status}
        title={error?.data?.code}
        subTitle={error?.data?.message}
      />
    );
  return <Fragment>{children}</Fragment>;
};

export default Wrapper;
