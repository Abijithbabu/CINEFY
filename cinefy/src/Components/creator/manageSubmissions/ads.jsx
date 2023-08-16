import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { getApplicants, getPosts } from "../../../redux/action";
import { Badge, Divider, Grid, Stack } from "@mui/material";
import Applicants from "./applicants";
import { Link } from "react-router-dom"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [data, setData] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getPosts().then((res) => setData(res));
  }, []);
  const handleChange = (panel, applicants) => (event, newExpanded) => {
    expanded !== panel && applicants.length
      ? getApplicants(applicants)
          .then((res) => setUsers(res))
          .then(() => setExpanded(newExpanded ? panel : false))
      : setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {data.map((item) => (
        <Accordion
          key={item._id}
          expanded={expanded === item._id}
          onChange={handleChange(item._id, item.applicants)}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Grid container>
              <Grid item xs={2.5} sm={2.5} md={2.5} lg={2.5}>
                <Typography>Title</Typography>
                <Typography>director</Typography>
              </Grid>
              <Grid item xs={6.5} sm={6.5} md={6.5} lg={6.5}>
                <Typography>{item.title}</Typography>
                <Typography>{item.director}</Typography>
              </Grid>
              <Grid item xs={2.5} sm={2.5} md={2.5} lg={2.5}>
                <Typography>{`${new Date(item.date).getDay()}-${new Date(
                  item.date
                ).getMonth()}-${new Date(
                  item.date
                ).getFullYear()}`}</Typography>
              </Grid>
              <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.5}>
              {item.applicants.length ? <Badge badgeContent={item.applicants.length} color="error" /> : '--'}
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container>
              <Grid item xs={2.5} sm={2.5} md={2.5} lg={2.5}>
                <img
                  src={`http://localhost:5000/${item.image}`}
                  width={120}
                  height={60}
                />
              </Grid>
              <Grid item xs={6.5} sm={6.5} md={6.5} lg={6.5}>
                <Typography>Project Type : {item.projectType}</Typography>
                <Typography>Location : {item.location}</Typography>
                <Typography>Applicants : {item.applicants.length}</Typography>
              </Grid>
              <Grid item xs={2} sm={2} md={2} lg={2}></Grid>
              <Grid item xs={1} sm={1} md={1} lg={1}>
                <Link to={`/manageContents?id=${item._id}`}>more details</Link>
                
              </Grid>
            </Grid>
            <Divider variant="inset" sx={{padding:2}} />
            {item.applicants.length ? (
              <>{users.length && <Applicants data={users} id={item._id} />}</>
            ) : (
              <Typography>No Applicants Available...</Typography>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
