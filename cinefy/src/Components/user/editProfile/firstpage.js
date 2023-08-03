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
  { title: "long jump" },
  { title: "metad acting" },
  { title: "JavaScript" },
  // Add more skills as needed
];

const Profile = () => {
  const data = useSelector((store) => store.data.user);
  const intialState = {
    name: data.name,
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
    ...data.profile,
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
  const handleSave = () => {
    setIsEditing(false);
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
          height: {xs:200, sm:200, md:250 , xl:250},
          marginTop: "100px",
          boxShadow: "-8px 15px 15px #211E2D",
          background:
            "url('sky.jpg'), linear-gradient(237deg, #5D5658 0%, #463851 52.85%, #2C2639 95.60%)",
          borderRadius: "18px",
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
            <Box
              Width={100}
              sx={{
                background:
                  "linear-gradient(68deg, #2F2D3D 0%, #302638 96.40%)",
                height: "380px",
                marginTop: "-70px",
                transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                borderRadius: "14px",
                boxShadow: "-8px 15px 15px #211E2D",
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                align="center"
                sx={{ mt: "35px", color: "#C5AE8D 100%" }}
              >
                {user.roles[0]}
              </Typography>
              <Typography
                variant="body1"
                align="center"
                color="#FFE3B7"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                Profile Completed: 80%
              </Typography>
              <Typography
                variant="body2"
                align="center"
                color="#9A8A76"
                fontWeight=" 4"
                marginBottom="6px"
              >
                trivandrum kerala india
              </Typography>
              <Divider/>
              <Typography
                variant="body1"
                paddingTop={2}
                paddingLeft={2}
                color="#FFE3B7"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                Video Introduction
              </Typography>
              <Typography
                variant="body2"
                paddingLeft={2}
                color="#9A8A76"
                fontWeight=" 4"
              >
                create a 5 min attractive indroduction for get impertion
              </Typography>
              <Box align="center" paddingTop={2}>
                <video src="/path/to/video-introduction.mp4" controls />
              </Box>
            </Box>

            
            {/* languages 1 */}
            <Box
              Width={100}
              sx={{
                background:
                  "linear-gradient(68deg, #2F2D3D 0%, #302638 96.40%)",
                height: "auto",
                marginTop: "25px",
                borderRadius: "14px",
                boxShadow: "-8px 15px 15px #211E2D",
              }}
            >
              <Typography
                variant="body1"
                paddingTop={2}
                paddingLeft={2}
                color="#FFE3B7"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                Languages
              </Typography>
              <Typography
                variant="body2"
                paddingLeft={2}
                color="#9A8A76"
                fontWeight=" 4"
              >
                create a 5 min attractive indroduction for get impertion
              </Typography>
              <Box paddingTop={2}>
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
                        name="languages"
                        onChange={(e) => handleUpdate(e, index)}
                      />
                    ) : (
                      <Typography
                        sx={{
                          margin: "10px",
                          minHeight: "15px",
                          paddingLeft: "5px",
                        }}
                        variant="body1"
                        color="#9A8A76"
                      >
                        {lang}
                      </Typography>
                    )}
                  </>
                ))}
              </Box>
            </Box>
            {/* languages 2 */}

            <Box
              Width={100}
              sx={{
                background:
                  "linear-gradient(68deg, #2F2D3D 0%, #302638 96.40%)",
                height: "auto",
                marginTop: "25px",
                borderRadius: "14px",
                boxShadow: "-8px 15px 15px #211E2D",
              }}
            >
              <Typography
                variant="body1"
                paddingTop={2}
                paddingLeft={2}
                color="#FFE3B7"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                Certifications
              </Typography>
              <Typography
                variant="body2"
                paddingLeft={2}
                color="#9A8A76"
                fontWeight=" 4"
              >
                create a 5 min attractive indroduction for get impertion
              </Typography>
              <Box paddingTop={2}>
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
                        name="certifications"
                        onChange={(e) => handleUpdate(e, index)}
                      />
                    ) : (
                      <Typography
                        sx={{
                          margin: "10px",
                          minHeight: "15px",
                          paddingLeft: "5px",
                        }}
                        variant="body1"
                        color="#9A8A76"
                      >
                        {cert}
                      </Typography>
                    )}
                  </>
                ))}
              </Box>
            </Box>
            {/* languages */}

            {/* Video Introduction */}
            <Card sx={{ marginTop: "140px" }}>
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

            <Cards
              user={user}
              handleAdd={handleAdd}
              hideElements={hideElements}
              edit={edit}
              handleUpdate={handleUpdate}
            />
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
                        name="languages"
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
                        name="certifications"
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
                    <CreateIcon
                      sx={{ paddingLeft: "10px" }}
                      size="small"
                      onClick={() => setedit(true)}
                    />
                  </IconButton>
                }
                title="Education"
              />
              <CardContent>
                {user.education &&
                  user.education.map((edu, index) => (
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
                          name="education"
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
            <Box
              Width={100}
              sx={{
                background:
                  "linear-gradient(68deg, #2F2D3D 0%, #302638 96.40%)",
                height: "auto",
                marginTop: "22px",
                paddingBottom: "5px",
                borderRadius: "14px",
                boxShadow: "-8px 15px 15px #211E2D",
              }}
            >
              <Typography
                variant="body1"
                paddingTop={2}
                paddingLeft={2}
                color="#FFE3B7"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                {data.name}
              </Typography>
              <Typography
                variant="body2"
                paddingLeft={2}
                color="#9A8A76"
                fontWeight=" 4"
              >
                create a description
              </Typography>
              <Divider />
              <Box padding={2}>
                {edit ? (
                  <Input
                    value={user.bio}
                    name="bio"
                    onChange={(e) => handleUpdate(e)}
                  />
                ) : (
                  <Typography variant="body2" color="#b3b3b3">
                    {user.bio}
                  </Typography>
                )}
              </Box>
            </Box>

            {/* next */}
            <Box
              Width={100}
              sx={{
                background:
                  "linear-gradient(68deg, #2F2D3D 0%, #302638 96.40%)",
                height: "auto",
                marginTop: "25px",
                paddingBottom: "0px",
                marginBottom: "350px",
                borderRadius: "14px",
                boxShadow: "-8px 15px 15px #211E2D",
              }}
            >
              <Typography
                variant="body1"
                paddingTop={2}
                paddingLeft={2}
                color="#FFE3B7"
                sx={{ display: hideElements ? "none" : "block" }}
              >
                Work Experience
              </Typography>
              <Typography
                variant="body2"
                paddingLeft={2}
                color="#9A8A76"
                fontWeight=" 4"
              >
                create a 5 min attractive indroduction for get impertion
              </Typography>
              <Box align="center" paddingTop={2} color="#b3b3b3">
                {user.workExp.map((item, index) => (
                  <React.Fragment key={index}>
                    <ListItem disablePadding>
                      {edit ? (
                        <Input
                          value={item}
                          name="workExp"
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
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  paddingTop={4}
                  paddingLeft={2}
                  color="#FFE3B7"
                  sx={{ display: hideElements ? "none" : "block" }}
                >
                  Education
                </Typography>
                <Typography
                  variant="body2"
                  paddingLeft={2}
                  color="#9A8A76"
                  fontWeight=" 4"
                >
                  Adding a attractive indroduction for get chance
                </Typography>
                {user.education &&
                  user.education.map((edu, index) => (
                    <>
                      {edit ? (
                        <Input
                          value={edu}
                          name="education"
                          onChange={(e) => handleUpdate(e, index)}
                        />
                      ) : (
                        <Typography
                          sx={{
                            paddingLeft: "7px",
                            margin: "10px",
                            minHeight: "15px",
                          }}
                          variant="body1"
                          color="#b3b3b3"
                        >
                          {edu}
                        </Typography>
                      )}
                      <Divider
                        sx={{
                          paddingLeft: "10px",
                          display: hideElements ? "none" : "block",
                        }}
                      />
                    </>
                  ))}
              </Box>
              <Autocomplete
                sx={{ marginTop: "20px" }}
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
            </Box>

            <Card marginTop={1}>
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
                    name="bio"
                    onChange={(e) => handleUpdate(e)}
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
                            name="workExp"
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
