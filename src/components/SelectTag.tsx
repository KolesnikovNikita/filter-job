import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import { getResumes } from "../api/fetchJobs";
import { useDispatch } from "react-redux";

const names = [
  'React',
  'Mysql',
  'Ruby on Rails',
  'Unix',
  'JavaScript',
  'Html',
  'CSS',
  'Redux',
  'PHP',
  'Typescript',
  'Ruby',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}



export default function BasicSelect() {
  const [tag, setTag] = React.useState<string[]>([]);
  const [personName, setPersonName] = React.useState<string[]>([]);
  
  const dispatch = useDispatch();
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof tag>) => {
    const {
      target: { value },
    } = event;
    const tagValue = typeof value === 'string' ? value.split(',') : value;
  
    setTag(
      tagValue
    );
    getResumes({tags: tagValue}).then(res => dispatch({
      type: "SET_RESUME",
      payload: res.data,
    }))
  };

  const handleToggle = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <div>
        <br/>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Skills</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleToggle}
          input={<OutlinedInput id="select-multiple-chip" label="Skills" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>      
    </Box>
  );
}


