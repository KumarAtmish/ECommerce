import React from "react"
import "./Header.css";
import { useCart } from 'react-use-cart'
import { Link } from "react-router-dom";
import UserImg from "../Assets/Image/UserImg.jpg"

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import EditImage from "../Components/EditImage"


function App(props) {
    const { totalUniqueItems } = useCart();
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickE1 = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseE1 = () => {
    setAnchorEl(null);
  };

  
// for open editImage
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditImage handleClose={handleClose} open={open} />
      <div className="header">
      <Link to="/home">
        <img className="Header-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY3YIvtw3oQhaqOyj4vKanlf8LLaa1p0hAdA&usqp=CAU" alt="..." />
      </Link>
      <div>
        <div style={{display:"flex"}}>
          <img style={{width: "2vw",borderRadius: "50%"}} src={UserImg} alt="..." onClick={handleClickOpen}/>
          <div className="userName" onClick={handleClickE1}>Atmish</div>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseE1}
          >
            <Link to="/" style={{textDecoration:"none",cursor:"pointer"}}>
              <MenuItem onClick={handleCloseE1}>Logout</MenuItem>
            </Link>
          </Menu>
        </div>
        
        <Link to="/cart">
          <span className="data">{totalUniqueItems}</span>
          <img
            className="add-to-card"
            src="https://image.flaticon.com/icons/png/512/126/126083.png"
            alt="..."
          />
        </Link>
      </div>
    </div>
    </>
  );
}

export default App;
