import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  experience: string;
  handleChangeExperience(params: string): void;
};

export default function InputExperience({
  experience,
  handleChangeExperience,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const experience = event.target.value as string;
    handleChangeExperience(experience);
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
