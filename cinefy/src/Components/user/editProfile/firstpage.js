import React, { useEffect, useState } from "react";
import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { red } from "@mui/material/colors";
import { CenterFocusStrong, Visibility } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Input from "@mui/material/Input";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateProfile } from "../../../redux/action";
import Cards from "./card";
const styles = {
  card: {
    marginTop: "10px",
    position: "relative",
  },
  avatar: {
    position: "relative",
    top: "-50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: red[500],
    borderRadius: "50%",
    width: "90px",
    height: "90px",
    fontSize: "2rem",
    border: "2px solid white",
  },
  cardContent: {
    marginTop: "0px", // Adjust as needed
  },
};

const skills = [
  'Film Production',
  'Cinematography',
  'Video Editing',
  'Screenwriting',
  'Directing',
  'Acting',
  'Production Design',
  'Sound Design',
  'Costume Design',
  'Makeup and Hair Styling',
  'Visual Effects',
  'Stunt Coordination',
  'Set Construction',
  'Grip and Electric',
  'Location Scouting',
  'Film Marketing and Distribution',
  'Film Theory and Criticism',
  'Film History',
  'Film Budgeting and Finance'
];

const Profile = () => {
  const data = useSelector((store) => store.data.user);
  const intialState = {
    name: data.name,
    roles: ["Actor"],
    photo: data.profilePic,
    cover: "",
    age: 21,
    gender: 'male',
    bio: `This impressive paella is a perfect party dish and a fun meal
    to cook together with your guests. Add 1 cup of frozen peas
    along with the mussels, if you like.`,
    intro: "",
    skills: [],
    certifications: [
      "Certification 1 - form unnikuttan awards",
      "Certification 2 - form unnikuttan awards",
    ],
    languages: ["English", "French"],
    workExp: [{role:"Film A ", organization:'film A'}],
    education: ["College Name - Degree", "University Name - Degree"],
    ...data.profile,
  };
 useEffect(()=>{
  console.log(data);
 },[data])
  const [user, setuser] = useState(intialState);
  const [edit, setedit] = useState(true);

  const UpdateUser = ({ value, name }) => {
    const newName = name.substring(1);
    const key = parseInt(name[0]);
    console.log(key, newName);
    return (
      <input
        value={user[newName][key]}
        name={name}
        onChange={(e) => handleUpdate(e, key)}
      ></input>
    );
  };

  const handleSubmit = async () => {
    await updateProfile(user).then((res) => setedit(false));
  };
  const handleAdd = (e) => {
    setuser((prevUser) => ({
      ...prevUser,
      [e]: [...prevUser[e], " "],
    }));
  };
  const handleUpdate = (e, key = null) => {
    const data = user;
    console.log(key);
    if (key !== null) {
      data[e.target.name][key] = e.target.value;
    } else {
      data[e.target.name] = e.target.value;
    }
    console.log(data);
    setuser({ ...data });
  };
  return (
    <Container sx={{ paddingTop: "19px" }}>
      <Box
        maxWidth={9999}
        borderRadius={1}
        sx={{
          height: { xs: 200, sm: 200, md: 250, xl: 250 },
          marginTop: "100px",
          background:
            "url('sky.jpg'), linear-gradient(237deg, #5D5658 0%, #463851 52.85%, #2C2639 95.60%)",
          borderRadius: "8px",
          backgroundSize: "100%, 20px",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        {edit ? (
          <Button
            variant="outlined"
            sx={{
              marginLeft: { xs: 51, sm: 80, md: 108, xl: 129 },
              marginTop: "105px",
            }}
            onClick={handleSubmit}
          >
            Save Changes
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              marginLeft: { xs: 51, sm: 80, md: 108, xl: 129 },
              marginTop: "105px",
            }}
            onClick={() => setedit(true)}
          >
            Edit
          </Button>
        )}
      </Box>
      <Grid container spacing={0}>
        <Grid item xs={12} md={4} marginTop={2}>
          <Box
            sx={{ display: "flex", flexDirection: "column" }}
            alignItem="right"
            display="flex"
            justifyContent="right"
          >
            <Avatar
              sx={styles.avatar}
              aria-label="recipe"
              zIndex={0}
              src={user.photo}
            />
            <Card sx={{ marginTop: " -53px" }}>
              <CardHeader />
              <CardContent>
                <Grid container>
                  <Grid item xs={6} md={6} sm={6} lg={6}>
                    <Typography>Name</Typography>
                    <Typography>Age</Typography>
                    <Typography>Gender</Typography>
                  </Grid>
                  {edit ? <Grid item xs={6} md={6} sm={6} lg={6}>
                    <Input>ANJITH B</Input>
                    <Select
                      value={user.gender}
                      label="Gender"
                      onChange={handleUpdate}
                    >
                      <MenuItem value={'male'}>Male</MenuItem>
                      <MenuItem value={'Female'}>Female</MenuItem>
                      <MenuItem value={'others'}>Others</MenuItem>
                    </Select>
                  </Grid>
                    : <Grid item xs={6} md={6} sm={6} lg={6}>
                      <Typography>ANJITH B</Typography>
                      <Typography>23</Typography>
                      <Typography>Male</Typography>
                    </Grid>
                  }
                </Grid>
              </CardContent>
            </Card>

            {/* <Card  sx={{ marginTop: "-93px" }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings" >
                    <AttachFileIcon size="small"
                      sx={{ display: hideElements ? "none" : "block" }}
                    />
                    <CreateIcon
                      sx={{
                        paddingLeft: "10px",
                        display: hideElements ? "none" : "block",
                      }}
                    />
                  </IconButton>
                }
                title="Video Introduction"
                subheader="create a 5 min attractive indroduction for get impertion"
              />
              <CardContent align="center">
                <video
                  margin={3}
                  src="/path/to/video-introduction.mp4"
                  controls
                />
              </CardContent>
            </Card> */}

            <Cards
              user={user}
              handleAdd={handleAdd}
              edit={edit}
              handleUpdate={setuser}
            />
            <Card sx={{ maxWidth: 999, marginTop: "10px" }}>
              <CardHeader
                action={
                  edit && <IconButton onClick={()=>setuser(prev=>{
                    const education = user?.education ?? []
                    education.push({})
                    return ({...prev,education})
                  })}><ControlPointIcon /></IconButton>
                }
                title="Education"
              />
              <CardContent>
                {user.education &&
                  user.education.map((edu, index) => (
                    <>
                      <TextField
                        required
                        id="standard-required"
                        label="Qualification"
                        variant="standard"
                      />
                      <TextField
                        id="standard-disabled"
                        label="institution / college"
                        variant="standard"
                      />
                    </>
                  ))}
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              margin: { sx: 1, sm: 1, md: 0, lg: 0, xl: 0 },
              marginTop: { md: 2, lg: 2, xl: 2 },
              marginLeft: { md: 2, lg: 2, xl: 2 },
            }}
          >

            <Card marginTop={1}>
              <CardHeader
                title={data.name}
                subheader="description"
              />
              <CardContent>
                {edit ? (
                  <TextField
                    id="description"
                    name="bio"
                    label="Brief Description *"
                    value={user.bio || ''}
                    onChange={handleUpdate}
                    fullWidth
                    autoComplete="Description"
                    multiline
                    rows={3}
                    helperText="Brief Description (about 100-200 words)"
                  />
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {user.bio}
                  </Typography>
                )}
              </CardContent>
            </Card>
            {/* Work History */}

            <Card sx={{ marginTop: "10px" }}>
              <CardHeader
                action={
                  edit && <IconButton onClick={()=>setuser(prev=>{
                    const workExp = user?.workExp ?? []
                    workExp.push({})
                    return ({...prev,workExp})
                  })}><ControlPointIcon /></IconButton>
                }
                title="Work History"
                subheader="Adding work experience will increase your chance"
              />
              <CardContent>
                {user?.workExp?.map((item,index) => (
                  <div>
                    <TextField
                      id="standard-search"
                      label="Role"
                      type="search"
                      value={item?.role}
                      variant="standard"
                    />
                    <TextField
                      id="standard-helperText"
                      label="Organisation / Institution"
                      type="search"
                      value={item?.organization}
                      helperText="Place / Area of service"
                      variant="standard"
                      onChange={(e)=>setuser(prev=>{
                        prev.workExp[index].organization = e.target.value
                        return ({...prev})
                      })}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}

            <Card sx={{ marginTop: "10px", marginBottom: '40px' }}>
              <CardHeader
                title='Skills'
              />
              <CardContent>
                <Autocomplete
                  multiple
                  value={data.skills}
                  name='skills'
                  onChange={(e, value) => setuser({ ...data, skills: value })}
                  options={['Action Choreographer', 'Actor', 'Actress', 'Animator', 'Art Director', 'Assistant Director', 'Associate Director', 'Cartoonist', 'Child Actor', 'Child Actress', 'Cinematographer', 'Content Creator', 'Costume Designer', 'Dancer', 'Dance Choreographer', 'Designers', 'DI Colorist', 'Digital Artist', 'Director', 'Disco Jockey', 'Dubbing Artist', 'Editor', 'Graphic Designer', 'Illustrator', 'Lead Actor', 'Lead Actress', 'Lyricist', 'Makeup Artist', 'Model', 'Music Director', 'Photographer', 'Poster Designer', 'Publicist', 'Radio Jockey', 'Recording Technician', 'Script Writer', 'Singer', 'Social Media Manager', 'Sound Engineer', 'Story Writer', 'Stunt Director']
                  }
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      label="select your expertise *"
                      placeholder="select skills"
                    />
                  )}
                />
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
