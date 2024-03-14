import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";

function BillsVotes() {
  const [rowData, setRowData] = useState<any>([
    {
      vote1: 13,
      vote2: 6,
      bill_id: "2900994",
      bill_title: "H.R. 3684: Infrastructure Investment and Jobs Act",
      sponsor_name: "No Primary Sponsor",
    },
    {
      vote1: 6,
      vote2: 13,
      bill_id: "2952375",
      bill_title: "H.R. 5376: Build Back Better Act",
      sponsor_name: "Rep. John Yarmuth (D-KY-3)",
    },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState<any>([
    { field: "bill_id", headerName: "Bill Identifier" },
    { field: "bill_title", headerName: "Bill" },
    { field: "vote1", headerName: "Supporters" },
    { field: "vote2", headerName: "Opposers" },
    { field: "sponsor_name", headerName: "Primary Sponsor" },
  ]);

  return (
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
  );
}

export default BillsVotes;
