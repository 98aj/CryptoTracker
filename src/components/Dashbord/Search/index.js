import React, { useState } from "react";
import "./style.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function Search({search, changeFun}) {
  

  return (
    <div className="search">
      <SearchRoundedIcon />
      <input type="text" placeholder="Search" value={search} onChange={(e)=>changeFun(e)}/>
    </div>
  );
}
