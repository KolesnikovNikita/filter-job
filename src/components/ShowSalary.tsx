import * as React from "react";
import Checkbox from "@mui/material/Checkbox";

type Props = {
  handleChangeShowSalary(params: boolean): void;
  isShowSalary: boolean;
};

export default function ControlledCheckbox({
  handleChangeShowSalary,
  isShowSalary,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeShowSalary(event.target.checked);
  };

  return (
    <Checkbox
      checked={isShowSalary}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}
