import { Pagination } from "antd";
import React from "react";

const PageNation02: React.FC = (P) => {
  const onChangePage = (page: number, pageSize: number) => {
    // console.log(page, pageSize);
  };

  const {} = P;
  return (
    <>
      <Pagination
        size="small"
        defaultCurrent={1}
        current={2}
        total={30}
        style={{ margin: "24px 0" }}
        onChange={onChangePage}
      />
    </>
  );
};

export default PageNation02;
