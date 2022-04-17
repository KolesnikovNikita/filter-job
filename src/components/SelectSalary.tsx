import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

type Props = {
  salary: string;
  handleChangeSalary(params: string): void;
};

export default function InputSalary({ salary, handleChangeSalary }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const level = event.target.value as string;
    handleChangeSalary(level);
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
        value={salary}
        onChange={handleChange}
        type="number"
        id="outlined-basic"
        label="Salary..."
        variant="outlined"
      />
    </Box>
  );
}
