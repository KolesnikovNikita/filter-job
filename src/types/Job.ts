export default interface Job {
  title: string;
  company: string;
  salary: number;
  avatar: string;
  level: string;
  currency: string;
  skills: string[];
  isSalary: boolean;
  id: number;
  activity: string[];
}

export enum Currency {
  RUB = "RUB",
  EUR = "EUR",
  USD = "USD",
}