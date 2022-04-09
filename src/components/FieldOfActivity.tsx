import * as React from "react";
import Box from "@mui/material/Box";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { getResumes } from "../api/fetchJobs";
import { useDispatch } from "react-redux";

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    backend: false,
    frontend: false,
    applications: false,
    marketing: false,
    analytics: false,
    administartion: false,
    testing: false,
    design: false,
    managment: false,
  });

  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });

    getResumes({
      ...state,
      [event.target.name]: event.target.checked,
    }).then((res) =>
      dispatch({
        type: "SET_RESUME",
        payload: res.data,
      })
    );
  };

  const {
    backend,
    frontend,
    applications,
    marketing,
    administartion,
    testing,
    design,
    analytics,
    managment,
  } = state;
  const error =
    [
      backend,
      frontend,
      applications,
      marketing,
      administartion,
      testing,
      design,
      analytics,
      managment,
    ].filter((v) => v).length !== 2;

  return (
    <Box sx={{ display: "flex" }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Field of activity</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={backend}
                onChange={handleChange}
                name="backend"
              />
            }
            label="Backend"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={frontend}
                onChange={handleChange}
                name="frontend"
              />
            }
            label="Frontend"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={applications}
                onChange={handleChange}
                name="applications"
              />
            }
            label="Applications"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={marketing}
                onChange={handleChange}
                name="marketing"
              />
            }
            label="Marketing"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={administartion}
                onChange={handleChange}
                name="administartion"
              />
            }
            label="Administartion"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={testing}
                onChange={handleChange}
                name="testing"
              />
            }
            label="Testing"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={design}
                onChange={handleChange}
                name="design"
              />
            }
            label="Design"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={analytics}
                onChange={handleChange}
                name="analytics"
              />
            }
            label="Analytics"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={managment}
                onChange={handleChange}
                name="managment"
              />
            }
            label="Managment"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
