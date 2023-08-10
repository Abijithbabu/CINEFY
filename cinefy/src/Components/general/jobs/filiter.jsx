import styled from "@emotion/styled";
import React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Slider,
  SliderThumb,
  Typography,
} from "@mui/material";
import SimpleSlider from "./mobFilter";

const Fili = [
  {
    id: 1,
    title: "Project Type ",
    elements: [
      "Ad Film",
      "Documentry",
      "Modeling",
      "Movie",
      "Music Video",
      'Reality Show',
      'Short Film',
      'Tele Film',
      'TV Serial',
      'TV Show',
      'Web Series',
      'Hiring',
      'Others'
    ],
  },
  {
    id: 2,
    title: 'Age',
    flag: 1,
    elements: ['Male', 'Female', 'Others', 'Not Applicable'],
  },
  {
    id: 3,
    title: "Role",
    elements: ['Action Choreographer', 'Actor', 'Actress', 'Animator', 'Art Director', 'Assistant Director', 'Associate Director', 'Cartoonist', 'Child Actor', 'Child Actress', 'Cinematographer', 'Content Creator', 'Costume Designer', 'Dancer', 'Dance Choreographer', 'Designers', 'DI Colorist', 'Digital Artist', 'Director', 'Disco Jockey', 'Dubbing Artist', 'Editor', 'Graphic Designer', 'Illustrator', 'Lead Actor', 'Lead Actress', 'Lyricist', 'Makeup Artist', 'Model', 'Music Director', 'Photographer', 'Poster Designer', 'Publicist', 'Radio Jockey', 'Recording Technician', 'Script Writer', 'Singer', 'Social Media Manager', 'Sound Engineer', 'Story Writer', 'Stunt Director'],
  },
  {
    id: 4,
    title: "Gender",
    elements: ['Male', 'Female', 'Others', 'Not Applicable'],
  },
  {
    id: 5,
    title: "Date of posting",
    elements: ["Last 24 hours", "Last 3 days", "last 24 days", "expering soon"],
  },
  {
    id: 6,
    title: 'Languages',
    elements: [
      "Assamese", "Bengali", "Bodo", "Dogri", "English", "Gujarati",
      "Hindi", "Kannada", "Kashmiri", "Konkani", "Maithili", "Malayalam",
      "Marathi", "Meitei", "Nepali", "Odia", "Punjabi", "Sanskrit",
      "Santali", "Sindhi", "Tamil", "Telugu", "Urdu"
    ]

  }
];

const FiliterCard = styled(Card)({
  display: "flex-row",
  align: "",

  height: "",
  marginTop: "10px",
  minWidth: "100px",
  maxWidth: "px",
});

const H1 = styled(Typography)({
  fontFamily: "",
  color: "#000",
  paddingLeft: "25px",
  paddingTop: "10px",
});

const H2 = styled(Typography)({
  variant: "h6",
  color: "#000",
  paddingLeft: "15px",
  paddingTop: "5px",
});

const Ul = styled(ListItem)({
  padding: "0px",
  height: "15px",
  paddingTop: "20px",
  paddingBottom: "10px",
});

const Lbtn = styled(ListItemButton)({
  paddingBottom: "1px",
  paddingTop: "1px",
});

const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 6,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 1,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));
function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}

    </SliderThumb>
  );
}
function Filiter() {
  return (
    <>
      <Hidden mdDown implementation="css">
        <Typography>Filiter</Typography>
        <FiliterCard>
          {Fili.map((card) => (
            <Box key={card.id} >
              <H1>{card.title}</H1>
              {card.flag === 1 ? (
                <Box sx={{ m: 3, mt: 6 }} >
                  <AirbnbSlider
                    slots={{ thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    defaultValue={[20, 40]}
                    valueLabelDisplay="on"
                  />
                </Box>
              ):(
              <List sx={{ width: "100%" ,mt:2,mb:3}} size="small" style={{ maxHeight: "calc(220px - 10px)", overflowY: "scroll" }}>
                {card.elements.map((element, index) => (
                  <Ul key={index}>
                    <Lbtn size="small" >
                      <ListItemIcon>
                        <Checkbox size="small" />
                        <H2 variant="body2">{element}</H2>
                      </ListItemIcon>
                    </Lbtn>
                  </Ul>
                ))}
              </List>
              )}
              <Divider />
            </Box>
          ))}
        </FiliterCard>
      </Hidden>
      <Hidden mdUp implementation="css">
        <SimpleSlider Fili={Fili} />
      </Hidden>
    </>
  );
}
export default Filiter;



//#C5AE8D 100%
//<ListItemText />
//linear-gradient(226deg, #253541 1.21%, #0F2D2B 100%)
//linear-gradient(44deg, #171D1F 0%, #111B18 38.03%, rgba(16, 23, 26, 0.97) 64.31%, rgba(20, 28, 26, 0.92) 90.55%)
