import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Currency } from "../types/Job";

type Props = {
  handleChangeCurrency(params: string): void;
  currency: string;
};

export default function SelectCurrency({
  handleChangeCurrency,
  currency,
}: Props): JSX.Element {
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    handleChangeCurrency(value);
  };

  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={currency}
      label="Type"
      onChange={handleChange}
    >
      <MenuItem value={Currency.USD}>{Currency.USD}</MenuItem>
      <MenuItem value={Currency.RUB}>{Currency.RUB}</MenuItem>
      <MenuItem value={Currency.EUR}>{Currency.EUR}</MenuItem>
    </Select>
  );
}
