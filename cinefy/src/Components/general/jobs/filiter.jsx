import styled from "@emotion/styled";
import React, { useState } from "react";
import { Filters } from "../../../utils/constants/filter";
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
import { useEffect } from "react";



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
function Filiter({filter,apply}) {
  const initState = {'Project Type':[],Age:[0,0],Role:[],Gender:[],'Date of Posting':[],Languages:[]}
  const [selectedFilters, setSelectedFilters] = useState(initState);
   
  const handleCheckboxChange = (event, element,item) => { 
    if (event.target.checked) {
      setSelectedFilters(prevSelected => ({...prevSelected,[item]:[...prevSelected[item],element]}))
    } else {
      setSelectedFilters(prevSelected =>({
        ...prevSelected,[item]:prevSelected[item].filter(item => item !== element)
      })
      );
    }
  }
  useEffect(() => {
    console.log(filter);
  filter==0 && setSelectedFilters(initState)
  }, [filter])
  useEffect(() => {
   apply(selectedFilters)
  }, [selectedFilters])
  
  return (
    <>
      <Hidden mdDown implementation="css">
        <FiliterCard>
          {Filters.map((item) => (
            <Box key={item.id} >
              <H1>{item.title}</H1>
              {item.flag === 1 ? (
                <Box sx={{ m: 3, mt: 6 }} >
                  <AirbnbSlider
                    slots={{ thumb: AirbnbThumbComponent }}
                    getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                    valueLabelDisplay="on"
                    // defaultValue={[0, 100]}
                                        value={selectedFilters.Age}
                    onChange={(e)=>setSelectedFilters(prev=>({...prev,Age:e.target.value}))}
                  />
                </Box>
              ):(
                <List sx={{ width: "100%" ,mt:0,mb:2}} size="small" style={{ maxHeight: "calc(220px - 10px)", overflowY: item.id==4? "none":'scroll' }}>
                {item.elements.map((element, index) => (
                  <ListItem key={index} value={element} sx={{
                    padding: "0px",
                    height: "15px",
                    paddingTop: "20px",
                    paddingBottom: "10px",
                  }}>
                    <ListItemIcon>
                      <Checkbox
                        size="small"
                        checked={selectedFilters[item.title].includes(element)}
                        onChange={e => handleCheckboxChange(e, element,item.title)}
                      />
                        <H2 variant="body2">{element}</H2> 
                    </ListItemIcon>
                  </ListItem>
                ))}
              </List>
              )}
              <Divider />
            </Box>
          ))}
        </FiliterCard>
      </Hidden>
      <Hidden mdUp implementation="css">
        <SimpleSlider Fili={Filters} />
      </Hidden>
    </>
  );
}
export default Filiter;



//#C5AE8D 100%
//<ListItemText />
//linear-gradient(226deg, #253541 1.21%, #0F2D2B 100%)
//linear-gradient(44deg, #171D1F 0%, #111B18 38.03%, rgba(16, 23, 26, 0.97) 64.31%, rgba(20, 28, 26, 0.92) 90.55%)
