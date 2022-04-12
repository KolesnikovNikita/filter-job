import * as React from "react";
import { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { getResumes } from "../api/fetchJobs";
import { setResumes } from "../init/resumes";
import { useDispatch, useSelector } from "react-redux";

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

const skills = [
  "React",
  "Mysql",
  "Ruby",
  "Unix",
  "PHP",
  "JavaScript",
  "Html",
  "Css",
  "Redux",
  "Typescript",
];

type Props = {
  personSkills: string[];
  handleChangePersonSkills(params: string[]): void;
};

export default function SelectTags({
  handleChangePersonSkills,
  personSkills,
}: Props) {
  const handleChange = (event: SelectChangeEvent<typeof personSkills>) => {
    const {
      target: { value },
    } = event;
    handleChangePersonSkills(
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personSkills}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {skills.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personSkills.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
