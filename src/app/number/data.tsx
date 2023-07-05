"use client";

import { ReactNode, createContext, useState } from "react";

export const StringContext = createContext<ReturnType<typeof useState<string>>>(
  null as any
);

type Props = {
  defaultValue: any;
  children: ReactNode;
};

export const StringProvider = ({ defaultValue, children }: Props) => {
  const state = useState(defaultValue);
  return (
    <StringContext.Provider value={state}>{children}</StringContext.Provider>
  );
};
