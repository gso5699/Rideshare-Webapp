import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import calendarIcon from "../img/calendar-icon-free-vector.jpeg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import React, { useState } from "react";

import { Nav, NavLink, NavMenu }
    from "./NavbarElements";
import Calendar from "./Calendar";


const NavBar = () => {
  const [user] = useAuthState(auth);
  const [showCalendar, setShowCalendar] = useState(false);


  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  

  const signOut = () => {
    auth.signOut();
  };

  const viewCalendar = () => {
    setShowCalendar((prevShowCalendar) => !prevShowCalendar);
  }
    
  return (
    <>
    
    <Nav>
        <NavMenu>
           <NavLink to="/" activeStyle>
              Chat
            </NavLink>
            <NavLink to="/calendar" activeStyle>
                Calendar
            </NavLink>

        </NavMenu>

      
      {user ? (
        <button className="view_calendar">
        <img
          onClick={viewCalendar}
          src={calendarIcon}
          alt="View Calendar"
          type="button"
        />
      </button>
      ) : (null)}
        
      {showCalendar && <Calendar />}
      {user ? (
        <div>
          <img src={user.photoURL} alt="user avatar" className="user_avatar"></img>
          <button onClick={signOut} className="sign-out" type="button">
          Sign Out
          </button>
        </div>
      ) : (
        
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </Nav>

    
</>

  );
};

export default NavBar;