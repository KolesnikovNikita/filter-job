import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { getResumes } from "../api/fetchJobs";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setResumes } from "../init/resumes";

type Props = {
  level: string;
  setExperience(params: string): void;
  experience: string;
  personSkills: string[];
};

export default function InputExperience({
  experience,
  setExperience,
  level,
  personSkills,
}: Props) {
  const dispatch = useDispatch();

  useEffect(() => {
    getResumes({ experience, level, tags: personSkills }).then((res) =>
      dispatch(setResumes(res.data.list))
    );
  }, [experience, level, personSkills, dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setExperience(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        type="number"
        id="outlined-basic"
        label="Select experience"
        variant="outlined"
      />
    </Box>
  );
}
