import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Link } from "react-router-dom";
import api from "../API/axios";

function LegislatorsVotes() {
  const [rowData, setRowData] = useState<any>(null);
  const getData = () => {
    api
      .get("/legislator/bills-voted")
      .then((response) => setRowData(response.data))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);

  const [colDefs, setColDefs] = useState<any>([
    { field: "id", headerName: "Legislator Identifier" },
    { field: "name", headerName: "Legislator" },
    { field: "vote1", headerName: "Supported bills" },
    { field: "vote2", headerName: "Opposed bills" },
  ]);

  return (
    <>
      <div>
        <Sidebar>
          <Menu
            menuItemStyles={{
              button: {
                [`&.active`]: {
                  backgroundColor: "#13395e",
                  color: "#b6c8d9",
                },
              },
            }}
          >
            <MenuItem component={<Link to="/legislators-votes" />}>
              Legislators Votes
            </MenuItem>
            <MenuItem component={<Link to="/bills-votes" />}>
              Bills Votes
            </MenuItem>
          </Menu>
        </Sidebar>
        <div className="ag-theme-quartz" style={{ height: 500 }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} />
        </div>
      </div>
    </>
  );
}

export default LegislatorsVotes;
