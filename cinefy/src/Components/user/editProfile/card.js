import { Card, CardContent, CardHeader, Divider, IconButton, Input, Typography } from '@mui/material'
import React from 'react'
import CreateIcon from "@mui/icons-material/Create";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
const card = (props) => {
  const {user, hideElements, edit, handleAdd, handleUpdate} = props
  return (
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
  )
}

export default card