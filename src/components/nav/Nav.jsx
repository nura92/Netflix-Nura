import React from "react";
import { AiOutlineLogout } from "react-icons/ai";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utilty/Firebase-cinfig";

import { onAuthStateChanged, signOut } from "firebase/auth";

const TopNav = ({ isScrolled }) => {
  const navigate = useNavigate()

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <NavContainer>
      <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
        <div className="leftSide">
          <div className="logo">
            <img
              src="https://github.com/carlosavilae/Netflix-Clone/blob/master/img/logo.PNG?raw=true"
              alt="logo"
            />
          </div>
        </div>

        <div className="rightSide">
          <button onClick={()=>signOut(firebaseAuth)}>
            <AiOutlineLogout />
          </button>
        </div>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .notScroll{
    display: flex;
  }
  .scrolled{
    display: flex;
    background-color: black;
  }
  nav{
    position: sticky;
    top: 0;
    height: 5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    z-index: 2;
    padding: 0.4rem;
    align-items: center;
   transition: 0.3s ease-in;
   .leftSide{
    display: flex;
    align-items: center;
    gap: 2rem;
    margin-left: 5rem;

   .logo{
    display: flex;
    justify-content: center;
    align-items: center;
   }
   img{
    width: 10rem;
    height: 2rem;
   }
  }
}

.rightSide{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button{
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 50%;
    }&:focus{
        outline: none;
    }svg{
        color: white;
        font-size: 2rem;
    }
}
`;

export default TopNav;
