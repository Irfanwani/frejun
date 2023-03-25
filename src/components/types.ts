import { Dispatch, SetStateAction } from "react";

export type SearchHeaderProps = {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  sort: boolean;
  setSort: Dispatch<SetStateAction<boolean>>;
};
