import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Autocomplete, Box, Button, Chip, FormControl, FormLabel, Radio, RadioGroup, Slider, SliderThumb } from "@mui/material";
import { makeStyles, styled } from "@mui/styles";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';

const useStyles = makeStyles((theme) => ({
  chipContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: theme.spacing(1),
  },
}));
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
export default function AddressForm({ data, dispatch ,edit}) {

  const classes = useStyles();
  const [role, setRole] = React.useState([])
  const handleChange = (e) => {
    console.log(data)
    dispatch({ ...data, [e.target.name]: e.target.value }) 
    console.log([e.target.name], e.target.value)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Details & specifications
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Autocomplete
            id="projectName"
            name="projectType"
            freeSolo
            variant="standard"
            value={data.projectType || ''}
            onChange={(e, value) => dispatch({ ...data, projectType: value })}
            options={[
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
            ].map((option) => option)}
            renderInput={(params) => <TextField {...params} variant="standard" label="Project Type *" />}
          />

        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Director"
            name="director"
            label="Director"
            value={data.director || ''}
            onChange={handleChange}
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Autocomplete
            multiple
            id="roles"
            value={data.roles}
            name='roles'
            onChange={(e, value) => dispatch({ ...data, roles: value })}
            options={['Action Choreographer', 'Actor', 'Actress', 'Animator', 'Art Director', 'Assistant Director', 'Associate Director', 'Cartoonist', 'Child Actor', 'Child Actress', 'Cinematographer', 'Content Creator', 'Costume Designer', 'Dancer', 'Dance Choreographer', 'Designers', 'DI Colorist', 'Digital Artist', 'Director', 'Disco Jockey', 'Dubbing Artist', 'Editor', 'Graphic Designer', 'Illustrator', 'Lead Actor', 'Lead Actress', 'Lyricist', 'Makeup Artist', 'Model', 'Music Director', 'Photographer', 'Poster Designer', 'Publicist', 'Radio Jockey', 'Recording Technician', 'Script Writer', 'Singer', 'Social Media Manager', 'Sound Engineer', 'Story Writer', 'Stunt Director']
            }
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Type of role *"
                placeholder="select roles"
              />
            )}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <RadioGroup
            row
            // aria-labelledby="demo-row-radio-buttons-group-label"
            name="gender"
            value={data.gender || ''}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" default control={<Radio />} label="No prefered gender" />
          </RadioGroup>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography>select prefered age range</Typography>
          <Box sx={{ mr: 2 , mt: 6 }} >
            <AirbnbSlider
              slots={{ thumb: AirbnbThumbComponent }}
              getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
              valueLabelDisplay="on"
              value={data.age}
              onChange={(e) => dispatch(prev => ({ ...prev, age: e.target.value }))}
            />
          </Box>
        </Grid> 
        <Grid item xs={12} sm={12}>
          <Autocomplete
            multiple
            id="language"
            name='language'
            value={data.language}
            onChange={(e, value) => dispatch({ ...data, language: value })}
            options={[
              "Assamese", "Bengali", "Bodo", "Dogri", "English", "Gujarati",
              "Hindi", "Kannada", "Kashmiri", "Konkani", "Maithili", "Malayalam",
              "Marathi", "Meitei", "Nepali", "Odia", "Punjabi", "Sanskrit",
              "Santali", "Sindhi", "Tamil", "Telugu", "Urdu"
            ]}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="language *"
                placeholder="select languages"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="location"
            name="location"
            label="State/Province/Region"
            value={data.location || ''}
            onChange={handleChange}
            fullWidth
            variant="standard"
            helperText="Location Preference (not mandatory only if any)"
          />
        </Grid>
{!edit && (
          <Grid item xs={12} sm={6}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                defaultValue={dayjs()}
                name='date'
                value={data.date || ''}
                onChange={(date) => dispatch({ ...data, date })}
                disablePast
                slotProps={{
                  textField: {
                    helperText: 'Last date of submission',
                  },
                }}
              />
            </DemoContainer>
          </LocalizationProvider>
        </Grid>
)}
        <Grid item xs={12}>
          <TextField
            id="description"
            name="description"
            label="Brief Description *"
            value={data.description || ''}
            onChange={handleChange}
            fullWidth
            autoComplete="Description"
            multiline
            rows={3}
            helperText="Brief Description (about 100-200 words)"
          />
        </Grid>

      </Grid>
    </React.Fragment>
  );
}
