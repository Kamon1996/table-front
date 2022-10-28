import React from "react";
import "./styles.scss";
import { IconArrowUp, IconArrowDown } from "@tabler/icons";
import { IFilters, ITableHeadData } from "../../interfaces";

interface ITebleHeadProps {
  tableHeadData: ITableHeadData[];
  current_sorted: string;
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export const THeads = ({
  tableHeadData,
  current_sorted,
  setFilters,
}: ITebleHeadProps) => {
  const [currentSortBy, currentDirection] = current_sorted.split(" ");

  const handleSort = (sort_by: string) => {
    if (!current_sorted || currentSortBy !== sort_by) {
      setFilters((prev) => ({
        ...prev,
        sort_by: `${sort_by} DESC`,
        page: 1,
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        sort_by: `${sort_by} ${currentDirection === "ASC" ? "DESC" : "ASC"}`,
        page: 1,
      }));
    }
  };

  return (
    <tr>
      {tableHeadData.map((head) =>
        head.sortable ? (
          <th
            key={head.title}
            className="head head--sortable"
            style={{minWidth: head.minWidth}}
            onClick={() => handleSort(head.accessor)}
          >
            <div className="head__content">
              <span>{head.title}</span>
              {currentSortBy === head.accessor ? (
                <Arrow currentDirection={currentDirection} />
              ) : null}
            </div>
          </th>
        ) : (
          <th key={head.title} className="head">
            {head.title}
          </th>
        )
      )}
    </tr>
  );
};

const Arrow = ({ currentDirection }: { currentDirection: string }) =>
  currentDirection === "ASC" ? (
    <IconArrowUp size={16} stroke={2} />
  ) : (
    <IconArrowDown size={16} stroke={2} />
  );
