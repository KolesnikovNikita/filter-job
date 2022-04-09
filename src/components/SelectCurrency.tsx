import * as React from 'react';
import { useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { getJobs } from "../api/fetchJobs";
import { useDispatch } from "react-redux";

export default function Money(): JSX.Element {
  const [currency, setCurrency] = React.useState<string>('RUB');
  const dispatch = useDispatch();  

  useEffect(() => {
    getJobs({currency}).then(res => dispatch({
      type: "SET_RESUME",
      payload: res.data,
    }))
  },[currency, dispatch])

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);  
  };

  return (
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value='USD'>USD</MenuItem>
          <MenuItem value='RUB'>RUB</MenuItem>
          <MenuItem value='EUR'>EUR</MenuItem>
        </Select>
  );
}