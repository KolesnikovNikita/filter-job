import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect(): JSX.Element {
  const [type, setType] = React.useState<string>('Increasing salary');
  
  const handleChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value='Increasing salary'>By increasing salary</MenuItem>
          <MenuItem value='Compliance'>By compliance</MenuItem>
          <MenuItem value='By descending salary'>By descending salary</MenuItem>
          <MenuItem value='By salary increase'>By salary increase</MenuItem>
        </Select>
  );
}