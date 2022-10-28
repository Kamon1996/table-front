import React from "react";
import { IFilters, IPageInfo } from "../../interfaces";
import "./styles.scss";

interface IPagyProps {
  pageInfo: IPageInfo;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export const Pagination = ({ pageInfo, setFilters }: IPagyProps) => {
  const handleSetPage = (page: number) => {
    setFilters((prev: IFilters) => ({ ...prev, page }));
  };

  return (
    <div className="pagy">
      {pageInfo.pages > 1
        ? Array.from({ length: pageInfo.pages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <div
                onClick={() => handleSetPage(pageNumber)}
                className={`pagy__item ${
                  pageNumber === pageInfo.page ? "pagy__item--current" : ""
                }`}
                key={pageNumber}
              >
                {pageNumber}
              </div>
            )
          )
        : null}
    </div>
  );
};
