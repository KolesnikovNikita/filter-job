import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { getJobs } from "../api/fetchJobs";
import { useDispatch } from "react-redux";
import { useEffect } from 'react';

export default function InputSalary() {
  const [salary, setSalary] = useState("");
  const dispatch = useDispatch();
  
  useEffect(() => {
    getJobs({salary}).then(res => dispatch({
      type: "SET_RESUME",
      payload: res.data,
    }))
  },[salary, dispatch])
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value);
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
      <TextField onChange={handleChange} type="number" id="outlined-basic" label="Salary..." variant="outlined" />
    </Box>
  );
}