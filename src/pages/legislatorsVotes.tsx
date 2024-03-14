import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

function LegislatorsVotes() {
  const [rowData, setRowData] = useState<any>([
    {
      id: "412421",
      vote1: 1,
      vote2: 1,
      name: "Rep. Adam Kinzinger (R-IL-16)",
    },
    {
      id: "1269767",
      vote1: 1,
      vote2: 1,
      name: "Rep. Alexandria Ocasio-Cortez (D-NY-14)",
    },
    {
      id: "15318",
      vote1: 1,
      vote2: 1,
      name: "Rep. Andrew Garbarino (R-NY-2)",
    },
    {
      id: "1269775",
      vote1: 1,
      vote2: 1,
      name: "Rep. Anthony Gonzalez (R-OH-16)",
    },
    {
      id: "1269778",
      vote1: 1,
      vote2: 1,
      name: "Rep. Ayanna Pressley (D-MA-7)",
    },
    {
      id: "904796",
      vote1: 1,
      vote2: 1,
      name: "Rep. Brian Fitzpatrick (R-PA-1)",
    },
    {
      id: "400380",
      vote1: 1,
      vote2: 1,
      name: "Rep. Chris Smith (R-NJ-4)",
    },
    {
      id: "1852382",
      vote1: 1,
      vote2: 1,
      name: "Rep. Cori Bush (D-MO-1)",
    },
    {
      id: "412487",
      vote1: 1,
      vote2: 1,
      name: "Rep. David McKinley (R-WV-1)",
    },
    {
      id: "904789",
      vote1: 1,
      vote2: 1,
      name: "Rep. Don Bacon (R-NE-2)",
    },
    {
      id: "400440",
      vote1: 1,
      vote2: 1,
      name: "Rep. Don Young (R-AK-1)",
    },
    {
      id: "400414",
      vote1: 1,
      vote2: 1,
      name: "Rep. Fred Upton (R-MI-6)",
    },
    {
      id: "905216",
      vote1: 1,
      vote2: 1,
      name: "Rep. Ilhan Omar (D-MN-5)",
    },
    {
      id: "1603850",
      vote1: 1,
      vote2: 1,
      name: "Rep. Jamaal Bowman (D-NY-16)",
    },
    {
      id: "17941",
      vote1: 1,
      vote2: 1,
      name: "Rep. Jeff Van Drew (R-NJ-2)",
    },
    {
      id: "412649",
      vote1: 1,
      vote2: 1,
      name: "Rep. John Katko (R-NY-24)",
    },
    {
      id: "412211",
      name: "Rep. John Yarmuth (D-KY-3)",
      vote1: 0,
      vote2: 0,
    },
    {
      id: "15367",
      vote1: 1,
      vote2: 1,
      name: "Rep. Nicole Malliotakis (R-NY-11)",
    },
    {
      id: "1269790",
      vote1: 1,
      vote2: 1,
      name: "Rep. Rashida Tlaib (D-MI-13)",
    },
    {
      id: "412393",
      vote1: 1,
      vote2: 1,
      name: "Rep. Tom Reed (R-NY-23)",
    },
  ]);

  const [colDefs, setColDefs] = useState<any>([
    { field: "id", headerName: "Legislator Identifier" },
    { field: "name", headerName: "Legislator" },
    { field: "vote1", headerName: "Supported bills" },
    { field: "vote2", headerName: "Opposed bills" },
  ]);

  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={rowData} columnDefs={colDefs} />
    </div>
  );
}

export default LegislatorsVotes;
