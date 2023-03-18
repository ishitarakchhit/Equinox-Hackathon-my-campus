import './App.css';
import LandingPage from './pages/landingpage/landingpage';
import Login from "./pages/loginuser/loginuser";
import Register from "./pages/registeruser/registeruser";
function App() {
  return (
    <div className="App">
      {/* <LandingPage/> */}
      <Register/>
      {/* <Login/> */}
    

    </div>
  );
}

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={ <LandingPage/> } />                                     
//         <Route path='/loginuser' element={<LoginUser/>}/>    
//         {/* <Route path='/registeruser' element={<RegisterUser/>}/>  
//         <Route path='/admin' element={<Pending/>}/>  
//         <Route path='/admin/approved' element={<Approved/>}/>    
//         <Route path='/admin/:userId/declined' element={<Declined/>}/>    
//         <Route path="/user" element={<UserPending/>}/>
        
//         <Route path="/user/:userId/approved" element={<UserApproved/>}/>
//         <Route path="/user/:userId/declined" element={<UserDeclined/>}/>
//         <Route path="/user/:userId/cancelled" element={<UserCancelled/>}/>   
//         <Route path="/user/:userId/venue" element={<Venue/>}/>  
//         <Route path="/user/:userId/calender" element={<Calender/>}/>   
//         <Route path="/user/:userId/booking" element={<Booking/>}/> */}
//       </Routes>
//     </div>
//   )
// }
