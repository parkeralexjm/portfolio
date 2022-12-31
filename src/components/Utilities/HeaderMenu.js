import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { handleClickScrollAbout, handleClickScrollProjects, handleClickScrollContact } from './SectionLinks';

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
const handleClose = () => {
  setAnchorEl(null);
}

  const handleCloseAbout = () => {
    setAnchorEl(null);
    handleClickScrollAbout();
  };

  const handleCloseProjects = () => {
    handleClickScrollProjects();
    setAnchorEl(null);
  };

  const handleCloseContact = () => {
    setAnchorEl(null);
    handleClickScrollContact();
  };

  return (
    <div>
      <MenuIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </MenuIcon>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleCloseAbout}>About</MenuItem>
        <MenuItem onClick={handleCloseProjects}>Projects</MenuItem>
        <MenuItem onClick={handleCloseContact}>Contact</MenuItem>
      </Menu>
    </div>
  );
}