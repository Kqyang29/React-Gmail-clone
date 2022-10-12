import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import EmailList from './components/emailList/EmailList';
import Header from './components/header/Header';
import Mail from './components/mail/Mail';
import Sidebar from './components/sidebar/Sidebar';
import SendMail from './components/SendMail/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import {selectSendMessageIsOpen} from './features/mailSlice'
import { login, selectUser } from './features/userSlice';
import Login from './components/login/Login';
import { auth } from './firebase';


function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    // listen user is login or not
    auth.onAuthStateChanged(user => {
      if (user) {
        // if login, store the info and stay in homepge
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,
        }));
      }
    })
  }, []);

  return (
    <div>
      {
        !user ? (
          <Login />
        ) : (
          <div className="app">
          <Header />
            <div className="app_body">
            <Sidebar />
              <Routes>
                <Route path='/' element={<EmailList />} />
                <Route path='/email' element={<Mail/>} />
              </Routes>
          </div>
          {sendMessageIsOpen&&<SendMail/>}
          </div>
          
        )
      }
    </div>
     
   
  );
}

export default App;



