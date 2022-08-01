import React from "react";
import { Result } from "antd";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited doesn't exist"
      extra={<Link to="/">Bask Home</Link>}
    />
  );
};

export default PageNotFound;
