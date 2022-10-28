import React, { useEffect, useState } from "react";
import { Table } from "./components/Table/Table";
import { TableFilters } from "./components/TableFilters/TableFilters";
import { api } from "./configs/axios";
import { IBook, IFilters, IPageInfo, ITableHeadData } from "./interfaces";
import "./styles.scss";

const defaultFilters: IFilters = {
  page: 1,
  filter: {
    column: "",
    type: "",
    value: "",
  },
  sort_by: "id",
};

const tableHeadData: ITableHeadData[] = [
  { title: "Date", sortable: false, accessor: "date", minWidth: 100 },
  { title: "Title", sortable: true, accessor: "title", minWidth: 370 },
  { title: "Count", sortable: true, accessor: "count", minWidth: 100 },
  { title: "Range", sortable: true, accessor: "range", minWidth: 100 },
];

function App() {
  const [books, setBooks] = useState<IBook[]>([]);
  const [pageInfo, setPageInfo] = useState<IPageInfo>();
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    api.get("books", { params: filters }).then((res) => {
      setBooks(res.data.books);
      setPageInfo(res.data.page_info);
    });
  }, [filters]);

  return (
    <div className="app">
      <TableFilters setFilters={setFilters} />
      <Table
        tableHeadData={tableHeadData}
        filters={filters}
        data={books}
        setFilters={setFilters}
        pageInfo={pageInfo}
      />
    </div>
  );
}

export default App;
