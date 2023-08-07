import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../../../utils/APIRoutes";
import ChatContainer from "./ChatContainer";
import Contacts from "./Contacts";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";

export default function Chat() {

  const navigate = useNavigate();
  const currentUser = useSelector((store) => store.data.user);
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
  // const [currentUser, setCurrentUser] = useState(undefined);
  // useEffect(async () => {
  //   if (!localStorage.getItem('store')) {
  //     navigate("/login");
  //   } else {
  //     setCurrentUser(
  //       await JSON.parse( 
  //         localStorage.getItem('store')
  //       )
  //     );
  //       }
  // }, []);
  useEffect(()=>{
    async function getUsers() {
    if (currentUser) {
      socket.current = io(host); 
      socket.current.emit("add-user", currentUser._id);
      const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
      setContacts(data.data); 
    }
  }
  getUsers()
  }, [currentUser]); 

  // useEffect(async () => {  
  //   if (currentUser) {
  //     if (currentUser.isAvatarImageSet) {
  //       const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
  //       setContacts(data.data);
  //     } else {
  //       navigate("/setAvatar");
  //     }
  //   }
  // }, [currentUser])
  const handleChatChange = (chat) => {
    setCurrentChat(chat); 
    console.log(chat);
  };
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome userName={currentUser.name} />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #F8F8F8;
  
  border-width: 1px;
    border-color:#ededed;
  .container {
    height: 85vh;
    width: 85vw;
    background-image: url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
