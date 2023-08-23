import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Avatar, Badge, Grid, Typography } from "@mui/material";

export default function Contacts({ contacts, changeChat, current }) {
  const data = useSelector((store) => store.data.user);

  const [currentSelected, setCurrentSelected] = useState(current ?? undefined);
  const changeCurrentChat = (contact,index) => {
    setCurrentSelected(contact._id);
    changeChat(contact,index);
  };

  return (
    <>
      {data?.name && (
        <Container>
          <div className="brand">
            <H2>Chats</H2>
          </div>

          <div className="contacts">
            {contacts.length
              ? contacts.map((contact, index) => {
                  // contact._id===currentSelected && changeChat(contact)
                  return (
                    <div
                      key={contact._id}
                      className={`contact ${
                        contact._id === currentSelected ? "selected" : ""
                      }`}
                      onClick={() => changeCurrentChat(contact,index)}
                    >
                      <div className="avatar">
                        <Avatar alt="Remy Sharp" src={contact?.profilePic} />
                      </div>
                      <Grid sx={{ width: "100%" }}>
                        <H2>{contact?.name}</H2>
                        <Grid container>
                          <Grid item xs={11.5} sm={11.5} md={11.5} lg={11.5}>
                            <H2 sx={{ fontSize: "13px" }}>{contact.lastMsg}</H2>
                          </Grid>
                          <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}>
                            {/* {contact?.unRead?.id===data._id && <Badge badgeContent={contact?.unRead?.count} color="success" />} */}
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  );
                })
              : " Loading..."}
          </div>
        </Container>
      )}
    </>
  );
}

const H2 = styled(Typography)({
  variant: "h6",
  color: "#000",
  paddingLeft: "15px",
  paddingTop: "5px",
  align: "right",
  fontFamily: "inherit",
  font: "800",
  width: "100%",
});
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #fff;
  border-style: solid;
  border-width: 01px;
  border-color: #ededed;
  .brand {
    display: flex;
    align-items: left;
    gap: 1rem;
    justify-content: left;
    padding: Top;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.1rem;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ededed;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #f7f7f7;
      min-height: 3rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: black;
          width: 100%;
        }
      }
    }
    .selected {
      background-color: #dad9d9;
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
    .username {
      h2 {
        color: white;
      }
    }
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
