import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import './EmailRow.css'

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { selectMail } from '../../features/mailSlice';

function EmailRow({ subject, description, title, id, time }) {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(selectMail({
      id,
      title,
      time,
      subject,
      description,
    }));

    navigate('email')
  }

  
  return (
    <div onClick={openMail} className='emailRow'>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className="emailRow_title">
        {title}
      </h3>

      <div className="emailRow_message">
        <h4>
          {subject}{" "}

          <span className="emailRow_description">
           - {description}
          </span>

        </h4>
        
      </div>

      <div className="emailRow_time">
          {time}
      </div>

    </div>
  )
}

export default EmailRow