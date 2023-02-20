import { Pagination } from "antd";
import { useEffect, useState } from "react";
import CardsGrid from "../containers/CardsGrid";
import Cards from "./Cards";

const Main = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(16);

  const onChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize)
  };

  return <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
    <Pagination current={currentPage} onChange={onChange} total={159} style={{ marginTop: 20 }} defaultPageSize={16} pageSizeOptions={[8, 16, 32, 64]}/>
    <Cards page={currentPage} pageSize={pageSize} />
  </div>
}

export default Main;