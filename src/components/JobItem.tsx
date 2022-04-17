import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

type Props = {
  title: string;
  company: string;
  salary: number;
  avatar: string;
  currency: string;
  skills: string[];
  activity: string[];
  level: string;
};

export default function VacancyItem({
  activity,
  title,
  company,
  salary,
  avatar,
  currency,
  skills,
  level,
}: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Avatar
          alt="Company avatar"
          src={avatar}
          sx={{ width: 56, height: 56 }}
        />
        <Typography variant="h4" component="div">
          {company}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="subtitle1">Salary: {salary}</Typography>
        <Typography variant="subtitle1">Level: {level}</Typography>
        <Typography variant="subtitle2">Currency: {currency}</Typography>
        <Typography variant="body2">
          Skills:
          {skills.map((skill) => (
            <React.Fragment key={skill}> {skill} </React.Fragment>
          ))}
        </Typography>
        <Typography variant="body2">
          Activities:
          {activity.map((active) => (
            <React.Fragment key={active}> {active} </React.Fragment>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
