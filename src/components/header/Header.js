import React from 'react'
import "./Header.css"
import logo from '../../images/Gmail_logo.png'
import { Avatar, IconButton } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';


function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const Signout = () => {
    auth.signOut().then(() => {
    dispatch(logout());
    });
    
  }

  return (
    <div className='header'>
      <div className="header_left">
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <img src={logo} alt="" />
      </div>
      <div className="header_middle">
        <SearchIcon />
        <input type="text" placeholder='Search gmail' />
        <ArrowDropDownIcon className='header_inputCaret'/>
      </div>
      <div className="header_right">
        <IconButton>
          <AppsIcon/>
        </IconButton>
        <IconButton>
          <NotificationsIcon/>
        </IconButton>
        <Avatar
          src={user?.photoUrl}
          onClick={Signout}
        />
      </div>
    </div>
  )
}

export default Header