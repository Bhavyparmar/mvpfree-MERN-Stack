import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar3 from './Navbar3';
import Navbar4 from './Navbar4';
import Chat from './Chat';
import Usersetting from './Usersetting';
import Feedback from './Feedback';
import Bid from './Bid';
import Contactus from './Contactus'
import Projectupload from './Projectupload';
import Error from './Error';
import Projectdetails from './Projectdetails';
const Insideroute = () => {
  return (
    <>
    <Router>
    <Navbar3/>
    <Navbar4/>
      <Routes>
          <Route exact path="/" element={<Bid/>}></Route>
          <Route exact path="/chat" element={<Chat/>}></Route>
          <Route exact path="/usersetting" element={<Usersetting/>}></Route>
          <Route exact path="/feedback" element={<Feedback/>}></Route>
          <Route exact path="/contactus" element={<Contactus/>}></Route>
          <Route exact path="/projectupload" element={<Projectupload/>}></Route>
          <Route exact path="/projectdetails" element={<Projectdetails/>}></Route>
          <Route exact path="*" element={<Error/>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default Insideroute
