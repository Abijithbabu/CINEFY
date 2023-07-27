import React, { useState } from "react";
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
import { updateProfile } from "../../redux/action";

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
  { title: "long jump" },
  { title: "metad acting" },
  { title: "JavaScript" },
  // Add more skills as needed
];

const Profile = () => {
  const data = useSelector((store) => store.data.user.profile);
  const intialState = {
    name: "",
    roles: ["Actor"],
    photo: data.profilePic,
    cover: "",
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
    workExp: ["Film A - Roll A - Duration", "Film B - Roll B - Duration"],
    education: ["College Name - Degree", "University Name - Degree"],
    ...data
  };

  const [user, setuser] = useState(intialState);
  const [edit, setedit] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hideElements, setHideElements] = useState(false);

  const handleOutlineButtonClick = () => {
    setHideElements(!hideElements);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const UpdateUser = ({ value, name }) => {
    const newName = name.substring(1)
    const key = parseInt(name[0])
    console.log(key, newName);
    return (
      <input
        value={user[newName][key]}
        name={name}
        onChange={(e) => handleUpdate(e, key)}
      ></input>
    );
  };
  const handleSave = () => {
    setIsEditing(false);
  };
  const handleSubmit = async() => {
   await updateProfile(user).then(res=>setedit(false))
    
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
    <Container sx={{ mt: 14 }}>
      <Box
        maxWidth={9999}
        height={150}
        sx={{
          background: "url('a.jpg'), lightgray 50% / cover no-repeat",
          borderRadius: "4px",
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
        ) : (<Button
          variant="outlined"
          sx={{
            marginLeft: { xs: 51, sm: 80, md: 108, xl: 129 },
            marginTop: "105px",
          }}
          onClick={() => setedit(true)}
        >
          Edit
        </Button>)}
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
            <Box
              Width={100}
              sx={{
                backgroundColor: "white",
                height: "130px",
                marginTop: "-70px",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: "4px",
                boxShadow:
                  "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                sx={{ mt: "35px" }}
              >
                {user.roles[0]}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="text.secondary"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                Profile Completed: 80%
              </Typography>
              <Typography variant="body2" align="center" color="text.secondary">
                trivandrum kerala india
              </Typography>
            </Box>
            {/* Video Introduction */}

            <Card sx={{ marginTop: "10px" }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings" size="small">
                    <AttachFileIcon
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
            </Card>

            {/* Languages */}

            <Card sx={{ maxWidth: 999, marginTop: "10px" }}>
              <CardHeader
                action={
                  <IconButton
                    aria-label="settings"
                    gap="3"
                    sx={{
                      paddingLeft: "10px",
                      display: hideElements ? "none" : "block",
                    }}
                  >
                    <ControlPointIcon
                      size="small"
                      onClick={() => handleAdd("languages")}
                    />
                    <CreateIcon sx={{ paddingLeft: "10px" }} size="small" />
                  </IconButton>
                }
                title="Languages"
              />
              <CardContent>
                {user.languages.map((lang, index) => (
                  <>
                    <Divider
                      sx={{
                        paddingLeft: "10px",
                        display: hideElements ? "none" : "block",
                      }}
                    />
                    {edit ? (
                      <Input
                        value={lang}
                        name='languages'
                        onChange={(e) => handleUpdate(e, index)}
                      />
                    ) : (
                      <Typography
                        sx={{ margin: "10px", minHeight: "15px" }}
                        variant="body1"
                        color="text.secondary"
                      >
                        {lang}
                      </Typography>
                    )}
                  </>
                ))}
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 999, marginTop: "10px" }}>
              <CardHeader
                action={
                  <IconButton
                    aria-label="settings"
                    gap="3"
                    sx={{
                      paddingLeft: "10px",
                      display: hideElements ? "none" : "block",
                    }}
                  >
                    <ControlPointIcon
                      size="small"
                      onClick={() => handleAdd("certifications")}
                    />
                    <CreateIcon sx={{ paddingLeft: "10px" }} size="small" />
                  </IconButton>
                }
                title="Certifications"
              />
              <CardContent>
                {user.certifications.map((cert, index) => (
                  <>
                    <Divider
                      sx={{
                        paddingLeft: "10px",
                        display: hideElements ? "none" : "block",
                      }}
                    />
                    {edit ? (
                      <Input
                        value={cert}
                        name='certifications'
                        onChange={(e) => handleUpdate(e, index)}
                      />
                    ) : (
                      <Typography
                        sx={{ margin: "10px", minHeight: "15px" }}
                        variant="body1"
                        color="text.secondary"
                      >
                        {cert}
                      </Typography>
                    )}
                  </>
                ))}
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 999, marginTop: "10px" }}>
              <CardHeader />
              <CardHeader
                action={
                  <IconButton
                    aria-label="settings"
                    gap="3"
                    sx={{
                      paddingLeft: "10px",
                      display: hideElements ? "none" : "block",
                    }}
                  >
                    <ControlPointIcon
                      size="small"
                      onClick={() => handleAdd("education")}
                    />
                    <CreateIcon sx={{ paddingLeft: "10px" }} size="small" onClick={() => setedit(true)} />
                  </IconButton>
                }
                title="Education"
              />
              <CardContent>
                {user.education && user.education.map((edu, index) => (
                  <>
                    <Divider
                      sx={{
                        paddingLeft: "10px",
                        display: hideElements ? "none" : "block",
                      }}
                    />
                    {edit ? (
                      <Input
                        value={edu}
                        name='education'
                        onChange={(e) => handleUpdate(e, index)}
                      />
                    ) : (
                      <Typography
                        sx={{ margin: "10px", minHeight: "15px" }}
                        variant="body1"
                        color="text.secondary"
                      >
                        {edu}
                      </Typography>
                    )}
                  </>
                ))}
              </CardContent>
            </Card>
          </Box>
        </Grid>

        {/* Second Box */}
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
            {/* About Description */}
            <Card marginTop={5}>
              <CardHeader
                action={
                  <IconButton
                    aria-label="settings"
                    gap="3"
                    sx={{
                      paddingLeft: "10px",
                      display: hideElements ? "none" : "block",
                    }}
                  >
                    <ControlPointIcon size="small" />
                    <CreateIcon sx={{ paddingLeft: "10px" }} size="small" />
                  </IconButton>
                }
                title={data.name}
                subheader="description"
              />
              <CardContent>
                {edit ? (
                  <Input
                    value={user.bio}
                    name='bio'
                    onChange={(e) => handleUpdate(e)}

                  />
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {user.bio}
                  </Typography>)}
              </CardContent>
            </Card>
            {/* Work History */}

            <Card sx={{ marginTop: "10px" }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    {isEditing ? (
                      <CheckIcon
                        onClick={handleSave}
                        size="small"
                        sx={{ display: hideElements ? "none" : "block" }}
                      /> // Show the CheckIcon in edit mode
                    ) : (
                      <CreateIcon
                        onClick={() => setedit(true)}
                        size="small"
                        sx={{ display: hideElements ? "none" : "block" }}
                      /> // Show the CreateIcon in non-edit mode
                    )}
                    <ControlPointIcon
                      size="small"
                      onClick={() => handleAdd("workExp")}
                      sx={{
                        paddingLeft: "10px",
                        display: hideElements ? "none" : "block",
                      }}
                    />
                  </IconButton>
                }
                title="Work History"
                subheader="Adding work experience will increase your chance"
              />
              <CardContent>
                <List>
                  {user.workExp.map((item, index) => (
                    <React.Fragment key={index}>
                      <ListItem disablePadding>
                        {edit ? (
                          <Input
                            value={item}
                            name='workExp'
                            onChange={(e) => handleUpdate(e, index)}

                          />
                        ) : (
                          <ListItemButton>
                            {item}
                            <ListItemText primary="" />
                          </ListItemButton>
                        )}
                      </ListItem>
                      <Divider
                        key={`divider-${index}`}
                        sx={{
                          paddingLeft: "10px",
                          display: hideElements ? "none" : "block",
                        }}
                      />
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Skills */}

            <Card sx={{ marginTop: "10px" }}>
              <Autocomplete
                multiple
                id="multiple-limit-tags"
                options={skills}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Skills"
                    placeholder="Add skills"
                  />
                )}
              />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
