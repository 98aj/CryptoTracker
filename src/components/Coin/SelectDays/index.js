import React from "react";
import './style.css'
import MenuItem from "@mui/material/MenuItem";

import Select from "@mui/material/Select";

export default function SelectDays({ days, handleChange }) {
  return (
    <div className="select-flex">
        <p>Price Change in </p>
    
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={days}
      label="Duration"
      onChange={handleChange}
      sx={{
        minWidth: 120,
        color: "var(--white)",
        border: "1px solid var(--blue)",
        margin: "1.5rem",
      }}
    >
      <MenuItem value={7}>7 Days</MenuItem>
      <MenuItem value={30}>30 Days</MenuItem>
      <MenuItem value={180}>6 Months</MenuItem>
      <MenuItem value={365}>1 Year</MenuItem>
    </Select>
    </div>
  );
}
