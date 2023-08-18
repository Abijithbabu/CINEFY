import { Autocomplete, Card, CardContent, CardHeader, Divider, IconButton, Input, TextField, Typography } from '@mui/material'
import React from 'react'
import CreateIcon from "@mui/icons-material/Create";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
const card = (props) => {
  const {user, edit, handleAdd, handleUpdate} = props
  return (
    <Card sx={{ maxWidth: 999, marginTop: "10px" }}>
    <CardHeader
      title="Languages"
    />
    <CardContent>
    <Autocomplete
            multiple
            id="language"
            name='language'
            value={user.language}
            onChange={(e, value) => handleUpdate({ ...user, language: value })}
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
    </CardContent>
  </Card>
  )
}

export default card