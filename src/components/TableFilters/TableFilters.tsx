import React, { MouseEvent, useEffect, useState } from "react";
import { IFilters } from "../../interfaces";
import "./styles.scss";

interface IFilterOption {
  [key: string]: string[];
}
interface IFilterForm {
  column: string;
  type: string;
  value: string;
}

const filterOptions: IFilterOption = {
  title: ["include", "equal"],
  count: ["more then", "less then", "equal"],
  range: ["more then", "less then", "equal"],
};

const defaultFormValues: IFilterForm = {
  column: "title",
  type: "include",
  value: "",
};

interface ITableFiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>;
}

export const TableFilters = ({ setFilters }: ITableFiltersProps) => {
  const [formData, setFormData] = useState<IFilterForm>(defaultFormValues);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      type: filterOptions[formData.column][0],
      value: "",
    }));
  }, [formData.column]);

  const handleSelect = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleInput = (e: any) => {
    setFormData((prev) => ({ ...prev, value: e.target.value }));
  };

  const handleSumnit = (e: any) => {
    e.preventDefault();
    setFilters((prev) => ({ ...prev, filter: formData, page: 1 }));
  };

  return (
    <form className="table-filters" onSubmit={handleSumnit}>
      <select
        className="select column-select"
        name="column"
        value={formData.column}
        onChange={handleSelect}
      >
        {Object.keys(filterOptions).map((column) => (
          <option key={column} value={column}>
            {column}
          </option>
        ))}
      </select>
      <select
        className="select type-select"
        name="type"
        value={formData.type}
        onChange={handleSelect}
      >
        {filterOptions[formData.column].map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      <input
        className="text-input"
        type={`${formData.column === "title" ? "text" : "number"}`}
        value={formData.value}
        onChange={handleInput}
      />
      <button className="btn btn-submit" type="submit">
        Search
      </button>
    </form>
  );
};
