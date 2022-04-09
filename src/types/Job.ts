export interface ResponseTypes {
  title: string;
  company: string;
  salary: number;
  avatar: string;
  level: string;
  currency: string;
  skills: string[];
  isSalary: boolean;
  id: number;
}

export type Job = {
  list: ResponseTypes[],
  total:number,
}