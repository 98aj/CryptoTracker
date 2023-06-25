import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        
        
      >
        <MenuRoundedIcon className={"link"}/>
      </Button>
      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-innerDiv">
          <Link to="/" className="link">
            <p>Home</p>
          </Link>
          <Link to="/watchlist" className="link">
            <p>Watchlist</p>
          </Link>
          <Link to="/compare" className="link">
            <p>Compare</p>
          </Link>
          <Link to="/dashbord" className="link">
            <p>Dashbord</p>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
