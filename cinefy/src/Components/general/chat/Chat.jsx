import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import { host } from "../../../utils/APIRoutes";
import ChatContainer from "./ChatContainer";
import Contacts from "./Contacts";
import Welcome from "./Welcome";
import { useSelector } from "react-redux";
import { getContacts, setMessageStatus } from "../../../redux/action";
import { useLocation } from "react-router";
import queryString from "query-string";
import { moveToTop } from "../../../utils/functions";
export default function Chat() {

  const location = useLocation();
  const queryParams = queryString.parse(location.search)
  const currentUser = useSelector((store) => store.data.user);
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(queryParams.id ?{_id:queryParams.id,profilePic:queryParams.dp,name:queryParams.name}: undefined);
  const [ users , setUsers ] = useState([])
  useEffect(()=>{
    async function getUsers() {
    if (currentUser) {
      socket.current = io(host); 
      socket.current.emit("add-user", currentUser._id);
      const data = await getContacts(currentUser._id);
      setContacts(data); 
    }
  }
  getUsers()
  }, [currentUser]) 
  useEffect(()=>{ 
    const updatedUsers = contacts.flatMap(x => {
      const usersForContact = x.users.filter(user => user._id !== currentUser?._id)
      console.log(usersForContact[0])
      return ({...usersForContact[0], unRead:x.unRead , lastMsg:x.lastMsg,updatedAt:x.updatedAt })
    });
    queryParams.id && !updatedUsers.filter(x=>x._id===queryParams.id).length && updatedUsers.push({_id:queryParams.id,profilePic:queryParams.dp,name:queryParams.name})
    setUsers(updatedUsers)
    console.log(updatedUsers)
  },[contacts]) 
  const handleChatChange = (chat,index) => {
    setCurrentChat(chat); 
    // setMessageStatus(chat._id,currentUser._id)
    const newUser = users
    newUser[index].unRead.count = 0
    setUsers(newUser)
  };
 const handleListRecent = (id,msg,rec)=>{
  console.log('calling')
  console.log(moveToTop(users,id,msg,rec,currentChat?._id)) 
  setUsers(moveToTop(users,id,msg,rec,currentChat?._id))
  }
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={users} changeChat={handleChatChange} current={queryParams.id}/>
          {currentChat === undefined ? (
            <Welcome userName={currentUser.name} />
          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} handleListRecent={handleListRecent}/>
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
