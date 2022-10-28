import React from "react";
import { THeads } from "../THeads/THead";
import { Pagination } from "../Pagination/Pagination";
import { IFilters, IPageInfo, ITableHeadData } from "../../interfaces";
import "./styles.scss";

interface ITableProps {
  tableHeadData: ITableHeadData[];
  filters: IFilters;
  pageInfo?: IPageInfo;
  data: any[];
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export const Table = ({
  tableHeadData,
  filters,
  setFilters,
  data,
  pageInfo,
}: ITableProps) => {
  return (
    <>
      <div className="table__wrapper">
        <table className="table">
          <THeads
            tableHeadData={tableHeadData}
            current_sorted={filters.sort_by}
            setFilters={setFilters}
          />
          {data.length > 0 ? (
            data.map((book) => (
              <tr key={book.id}>
                {tableHeadData.map((head) => (
                  <td key={head.accessor}>{book[head.accessor]}</td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="no-content">
              <td colSpan={4}>No data found</td>
            </tr>
          )}
        </table>
      </div>
      {pageInfo ? (
        <Pagination pageInfo={pageInfo} setFilters={setFilters} />
      ) : null}
    </>
  );
};
