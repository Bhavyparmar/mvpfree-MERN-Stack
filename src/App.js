// For user side
// For user side
import Index from "./components/Index";
import AllNavbar from "./components/AllNavbar";
import Error from "./components/Error";
import Login from "./components/Login";
import Projectupload from "./components/Projectupload";
import Userprofile from "./components/Userprofile";
import Bid from "./components/Bid"
import Chat from "./components/Chat"
import Contactus from "./components/Contactus"
import Feedback from "./components/Feedback"
import Register from "./components/Register";
import Proposals from "./components/Proposals";
import Projectdetails from "./components/Projectdetails";
import Usersetting from "./components/Usersetting";
// External files for the contexts
// External files for the contexts
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountState from "./context/AccountState";
import BidState from "./context/BidState";
// For admin side
// For admin side
import Navbar from "./components/Admin/Navbar";
import Contact from "./components/Admin/Contact";
import Adminindex from "./components/Admin/Adminindex";
import Adminstate from "./components/Admin/context/Adminstate";
import Bidfetch from "./components/Admin/Bidfetch";
import Feedbackfetch from "./components/Admin/Feedbackfetch";
import Uploadfetch from "./components/Admin/Uploadfetch";
import Userinfo from "./components/Admin/Userinfo";
function App() {
  return (
    <>
<AccountState>
  <BidState>
    <Adminstate>
    <Router>  
     {localStorage.getItem('role')==="admin"?<Navbar/>  : <AllNavbar/> }
    {/* <AllNavbar/> */}
      <Routes>
          <Route exact path="/" element={<Index/>}></Route>
          <Route exact path="/bid" element={<Bid/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/chat" element={<Chat/>}></Route>
          <Route exact path="/contactus" element={<Contactus/>}></Route>
          <Route exact path="/feedback" element={<Feedback/>}></Route>
          <Route exact path="/register" element={<Register/>}></Route>
          <Route exact path="/projectupload" element={<Projectupload/>}></Route>
          <Route exact path="/projectdetails" element={<Projectdetails/>}></Route>
          <Route exact path="/proposals" element={<Proposals/>}></Route>
          <Route exact path="/usersetting" element={<Usersetting/>}></Route>
          <Route exact path="/Adminindex" element={<Adminindex/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/bidfetch" element={<Bidfetch/>}></Route>
          <Route exact path="/feedbackfetch" element={<Feedbackfetch/>}></Route>
          <Route exact path="/uploadfetch" element={<Uploadfetch/>}></Route>
          <Route exact path="/userinfo" element={<Userinfo/>}></Route>
          <Route exact path="/userprofile" element={<Userprofile/>}></Route>
          <Route exact path="*" element={<Error/>}></Route>
      </Routes>
    </Router>
    </Adminstate>
    </BidState>
    </AccountState>
    </>
  );
}

export default App;
