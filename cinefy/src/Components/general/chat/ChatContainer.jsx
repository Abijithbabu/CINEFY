import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../../../utils/APIRoutes";
import { useSelector } from "react-redux";
import { Avatar, Typography } from "@mui/material";
import { Height } from "@mui/icons-material";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const data = useSelector((store) => store.data.user);
  useEffect(() => {
  async function getData(){
    // const data = await JSON.parse(
    //   localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    // );
    const response = await axios.post(recieveMessageRoute, {
      from: data?._id,
      to: currentChat._id,
    });
    setMessages(response.data);
    console.log(response.data);
  }
  getData()
  }, [currentChat]);

  const handleSendMsg = async (msg) => {

    socket.current.emit("send-msg", {
      to: currentChat?._id,
      from: data?._id,
      message:msg,
      time:new Date()
    });
    await axios.post(sendMessageRoute, {
      from: data?._id,
      to: currentChat?._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg,time:Date.now() });
    setMessages(msgs);
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        console.log(9);
        console.log(msg.from,currentChat._id);
        if(msg.from===currentChat._id){
          console.log(true);
          setMessages((prev) => [...prev,{ fromSelf: false, message: msg.message ,time:msg.time}])
        }
      });
    }
  }, []);
 
  // useEffect(() => {
  //   arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  // }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <Avatar 
              src={currentChat?.profilePic}
              alt=""
            />
          </div>
          <div className="username">
            <H3 >{currentChat?.name}</H3>
            <H3 >{currentChat?._id}</H3>

          </div>
        </div>
        {/* <Logout /> */}
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return   (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`} 
              >
                <div className="content ">
                  <H2 >{message.message}</H2> 
                  <h5>{`${new Date(message.time).getHours()}:${new Date(message.time).getMinutes()}`}</h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}
const H2 = styled(Typography)({
  // variant: "h6",
  color: "#000",
  paddingLeft: "6px",
  marginBottom: "1px",
  align:"right",
  fontFamily:"inherit",
  fontSize:"800px"
  
});

const H3 = styled(Typography)({
  variant: "h6",
  color: "#000",
  paddingLeft: "6px",
  paddingTop: "px",
  align:"right",
  fontFamily:"inherit",
  // font:"800"
  
});

const Container = styled.div`
border-style: solid;
  border-width: 1px;
    border-color:#ededed;
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    background-color: #fff;
    display: flex;
    
  height:4rem;
    justify-content: space-between;
    align-items: center;
    padding:  0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
  .chat-messages {
    padding: 1rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 0.7rem;
        
        border-radius: 0rem 1rem 1rem 1rem;
        color: #000000;
        min-height: 10px;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        min-height: 0.8rem;
        border-radius: 1rem 1rem 0rem 01rem;
        background-color: #fff;
      }
    }
    .recieved {
      justify-content: flex-start;
      
      .content {
        margin-top;px;
        min-height: 0.6rem;
        border-radius: 0rem 1rem 1rem 1rem;
        background-color: #9900ff20;
        
      }
    }
  } 
`;
