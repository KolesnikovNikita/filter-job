import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { getResumes } from "../api/fetchJobs";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

export default function InputExperience() {
  const [experience, setExperience] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    getResumes({experience: experience}).then(res => dispatch({
      type: "SET_RESUME",
      payload: res.data,
    }))
  },[experience, dispatch])
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
    
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField onChange={handleChange} type="number" id="outlined-basic" label="Select experience" variant="outlined" />
    </Box>
  );
}