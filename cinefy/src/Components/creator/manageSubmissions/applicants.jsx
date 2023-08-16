import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { Alert, Tooltip } from "@mui/material";
import { Delete } from "@mui/icons-material";
export const getStatus = (status)=> {
    switch (status) {
      case 'pending':
        return <Alert severity='warning'>pending -- click here for more options</Alert>
      case 'selected':
        return <Alert severity='success'>Selected -- profile selected</Alert>
      case 'rejected':
        return <Alert severity='error'>Rejected -- this profile has been rejected</Alert>
      default:
        return <Alert severity='info'>unreviewed -- click on to review profile</Alert>
    }
  }
export default function AlignItemsList({ data,id }) {
  const navigate = useNavigate();
  return (
    <List sx={{ width: "100%", maxWidth: "100%", bgcolor: "background.paper" }}>
      {data.map((item, index) => (
        <div key={index}>
          <Tooltip title={"view details"} placement="top-start" arrow>
            <ListItem
              secondaryAction={getStatus(item.status)}
              alignItems="flex-start"
              sx={{ cursor: "pointer" }}
              onClick={() => navigate(`/manageApplicants?id=${item.user._id}&post=${id}`)}
            >
              <ListItemAvatar>
                <Avatar alt={item.user.name} src={item.user.profilePic} />
              </ListItemAvatar>
              <ListItemText
                primary={item.user.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {item.user.email}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Tooltip>
          {data.length - 1 !== index && (
            <Divider variant="inset" component="li" />
          )}
        </div>
      ))}
    </List>
  );
}
