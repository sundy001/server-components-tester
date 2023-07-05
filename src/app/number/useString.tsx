import { useContext } from "react";
import { StringContext } from "./data";

export const useString = () => {
  return useContext(StringContext);
};
