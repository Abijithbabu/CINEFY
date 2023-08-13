import * as React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Skeleton from "@mui/material/Skeleton";
import { styled } from "styled-components";
import { useNavigate } from "react-router";
import { timeAgo } from "../../../utils/functions";
const H1 = styled(Typography)({
    variant: "body1",
    color: "#000",
    paddingLeft: "1px",
    paddingTop: "1px",
  
    fontSize: "14px",
  
    fontWeight: "600",
    lineHeight: "normal",
  });
  const CardTime = styled(Typography)({
    color: "#484848",
    fontSize: "4px",
    fontStyle: "normal",
    fontWeight: "800",
    lineHeight: "normal",
    // padding: "13px 16px -1px 10px",
  });
function Media(props) {
  const { loading = false, data } = props
  const navigate = useNavigate();
  return (
    <Card sx={{ width: "100%", m: 2 }}>
      <CardHeader

        action={
          loading ? null : (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <H1>{data.title}</H1>
          )
        }
        subheader={
          loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            <CardTime>{timeAgo(data.date)}</CardTime> 
          )
        }
      />
      {loading ? (
        <Skeleton sx={{ height: 140 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          height="140"
          image={`http://localhost:5000/${data.image}`}
          alt="Nicola Sturgeon on a TED talk stage"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
          }}
          onClick={() => navigate(`/DetailPage?id=${data._id}`)}
        />
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          cursor: "pointer",
        }}
        onClick={() => navigate(`/DetailPage?id=${data._id}`)}
      >
        {loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <>
            <H1>{data.title}</H1>
            <Typography variant="body2" color="text.secondary" component="p">
              {data.roles}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default Media;
