import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import axios from "axios";
import {
  sendMessageRoute,
  recieveMessageRoute,
} from "../../../utils/APIRoutes";
import { useSelector } from "react-redux";
import { Avatar, Typography } from "@mui/material";

export default function ChatContainer({ currentChat, socket ,handleListRecent}) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const currentChatRef = useRef(currentChat);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const data = useSelector((store) => store.data.user);
  useEffect(() => {
    currentChatRef.current = currentChat;
    async function getData() {
      const response = await axios.post(recieveMessageRoute, {
        from: data?._id,
        to: currentChat._id,
      });
      setMessages(response?.data?.messages ?? []);
    }
    getData();
  }, [currentChat]);
useEffect(()=>{
  console.log(messages);
},[messages])
  const handleSendMsg = async (msg) => {
    socket.current.emit("send-msg", {
      to: currentChat?._id,
      from: data?._id,
      message: msg,
      time: new Date(),
    });

    const msgs = [...messages];
    msgs.push({ sender: data?._id, text: msg, time: Date.now() });
    setMessages(msgs)
    handleListRecent(currentChat?._id,msg,data?._id)
    await axios.post(sendMessageRoute, {
      from: data?._id,
      to: currentChat?._id,
      message: msg,
    });
  };

  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        handleListRecent(msg.from,msg.message,msg.to)
        if (msg.from === currentChatRef.current?._id) {
          setArrivalMessage({
            sender: currentChat?._id,
            text: msg.message,
            time: msg.time,
          })
          console.log('yes')
        }
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
          <div className="avatar">
            <Avatar src={currentChat?.profilePic} alt="" />
          </div>
          <div className="username">
            <H3>{currentChat?.name}</H3>
          </div>
        </div>
        {/* <Logout /> */}
      </div>
      <div className="chat-messages">
        {messages?.map((message) => {
          return (
            <div ref={scrollRef} >
              <div
                className={`message ${message?.sender === data?._id ? "sended" : "recieved"
                  }`}
              >
                <div className="content ">
                  <H2>{message.text}</H2>
                  <H3
                    variant="body2"
                    fontSize={10.675}
                    align="right"
                    style={{ display: "", margin: "0px" }}
                  >{`${new Date(message.time).getHours()}:${new Date(
                    message.time
                  ).getMinutes()}`} 
                  {message?.sender === data?._id && 
                  <DoneAllIcon sx={{fontSize:'15px'}} color="info"/>}
                  </H3>
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
  variant: "h6",
  color: "#000",
  paddingLeft: "6px",
  paddingRight: "9px",
  marginBottom: "0px",
  align: "right",
  fontFamily: "",
  fontSize: '0.675rem',
});

const H3 = styled(Typography)({
  fontSize: "800px",
  color: "#000",
  paddingLeft: "6px",
  paddingBottom: "1px",
  align: "right",
  fontFamily: "inherit",
  paddingRight: '1px',
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
        padding: 0.5rem;
        padding-bottom: 0px;
        border-radius: 0rem 1rem 1rem 1rem;
        color: #000000;
        // height: 5px;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      
      .content {
        
        display: block;
        min-height: 0.8rem;
        border-radius: 0.6rem 0.6rem 0rem 0.6rem;
        background-color: rgba(255, 255, 255, 0.40);
        
      }
    }
    .recieved {
      justify-content: flex-start;
      padding-bottom: 0px;
      .content {
        display: block;
        margin-top;px;
        min-height: 0.6rem;
        border-radius: 0rem 0.6rem 0.6rem 0.6rem;
        background-color: rgba(0, 167, 157, 0.32);
        textAlign:'right';
        
      }
    }
  } 
`;
