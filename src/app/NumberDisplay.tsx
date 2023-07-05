"use client";

import { useString } from "./number/useString";

export const NumberDisplay = () => {
  const [number] = useString();
  return (
    <div className="p-3 border border-red-600">NumberDisplay {number}</div>
  );
};
