import React, { useEffect, useState } from 'react'
import './EmailList.css'
import Section from '../section/Section';
import {  Checkbox, IconButton } from '@mui/material'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import EmailRow from '../email_row/EmailRow';
import { db } from '../../firebase';
function EmailList() {

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    db.collection('emails').orderBy('timestamp', "desc").onSnapshot((snapshot) => {
      setEmails(snapshot.docs.map((doc) => ({
        id: doc.id,
        data:doc.data(),
      })))
    })

  }, []);

  console.log(emails);

  return (
    <div className='emailList '>
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
          <IconButton>
            <RedoIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
        <div className="emailList_settingsRight">
        <IconButton>
            <ChevronLeftIcon/>
          </IconButton>
          <IconButton>
            <ChevronRightIcon/>
          </IconButton>
          <IconButton>
            <KeyboardHideIcon/>
        </IconButton>
        <IconButton>
            <SettingsIcon/>
          </IconButton>
        </div>
       
      </div>

      <div className="emailList_sections">
        <Section Icon={InboxIcon} title="Primary" color="red" selected={true} />
        <Section Icon={PeopleIcon} title="Social" color="#1A7CE8"/>
        <Section Icon={LocalOfferIcon } title="Promotions" color="green"/>
      </div>

      <div className="emailList_list">
        {
          emails.map(({id,data:{to,subject,message,timestamp}}) => (
            <EmailRow
              id={id}
              key={id}
              title={to}
              subject={subject}
              description={message}
              time={new Date(timestamp?.seconds*1000).toUTCString()}
            />
          ))
        }
      </div>

    </div>
  )
}

export default EmailList