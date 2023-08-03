import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Chip, FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
export default function AddressForm({data,dispatch}) {
  const [role, setRole] = React.useState();
  const handleDelete = (index) => {
    const roles = data.roles.filter((r, x) => x !== index); 
    dispatch({...data,roles})
  };
  const handleRoles = (event)=>{
    setRole(event.target.value)
    if (event.key === "Enter" || event.keyCode === 13) {
      const roles = [...data.roles,event.target.value]
      dispatch({...data,roles})
    }
  }
  const classes = useStyles();

  const handleChange = (e)=>{
    dispatch({...data,[e.target.name]:e.target.value})
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom> 
        Details & specifications
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="movieName"
            name="movie"
            label="Movie Name"
            value={data.movie || ''}
            onChange={handleChange}
            fullWidth
            autoComplete="given-name"
            variant="standard"
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="role"
            name="role" 
            label="Type of role"
            fullWidth
            autoComplete="role"
            variant="standard"
            onKeyDown={handleRoles}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Button sx={{mt:2}} size="small" variant="outlined" onClick={()=>handleRoles({target:{value:role}})}>+ ADD</Button> 
        </Grid>
        {data.roles.length!==0 && (
          <Grid item xs={12} sx={{mb:0}}>
            <div className={classes.chipContainer}>
              {data.roles.map((role, index) => (
                <Chip 
                  key={index}
                  label={role}
                  variant="outlined"
                  onDelete={() => handleDelete(index)}
                />
              ))}
            </div>
          </Grid>
        )}
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
          <TextField
            id="age"
            name="age"
            label="Age group"
            value={data.age || ''}
            onChange={handleChange}
            fullWidth
            variant="standard"
            helperText="Prefered age group"
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
        <Grid item xs={12} sm={6}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
        defaultValue={dayjs()}
        name = 'date'
        value={data.date || ''}
        onChange={(date)=>dispatch({...data,date})}
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
