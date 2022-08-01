import React, { Fragment } from "react";
import { Result, Spin } from "antd";

const Wrapper = ({ isLoading, isError, error, children }) => {
  if (isLoading) return <Spin tip="Loading..."></Spin>;
  if (isError)
    return [403, 404, 500].includes(error?.status) ?(
      <Result
        status={error?.status}
        title={error?.data?.code}
        subTitle={error?.data?.message}
      />
    ) : (
      <Result
        status="error"
        title="Something Went Wrong"
        subTitle="Please check your connection and try again later"
      />
    );
  return <Fragment>{children}</Fragment>;
};

export default Wrapper;
