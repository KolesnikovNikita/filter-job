import { FC } from "react";
import Avatar from "@mui/material/Avatar";

type Props = {
  title: string;
  company: string;
  salary: number;
  avatar: string;
  level: string;
  currency: string;
  skills: string[];
  isSalary: boolean;
};

const JobItem: FC<Props> = ({
  title,
  level,
  salary,
  company,
  avatar,
  currency,
  skills,
  isSalary,
}) => {
  return (
    <>
      <Avatar alt="Remy Sharp" src={avatar} />
      {title}
      {currency}
      {salary}
    </>
  );
};

export default JobItem;
