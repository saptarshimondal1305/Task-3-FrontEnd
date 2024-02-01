import React from "react";
import "./styles.css";
import { useState } from "react";
const Table = ({ data }) => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [newData, setNewData] = useState(data);

  const handleRowClick = (index, rowData) => {
    if (expandedRow === index) {
      setExpandedRow(null);
      setNewData(data); 
    } else {
      setExpandedRow(index);
      setNewData(rowData || data);
    }
  };
  return (
    <div className="main-container">
      <div className="sub-container">
        {Object.entries(data).map(([key, value], index) => (
          <div className="heading-element">
            <div className="cell">{key}</div>
            <div className="cell">
              {(typeof value === "object"  && value.length!==0) ? (
                <button
                  className="button"
                  onClick={() => handleRowClick(index, value)}
                >
                  {key}
                </button>
              ) : (
                value
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="table-row">
        {expandedRow !== null && (
          <div className="table-cell">
            <Table data={newData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Table;
