"use client";
import { Provider } from "react-redux";
import { appStore } from "./appStore";

type BookStoreProviderProps = {
  children: React.ReactNode;
};

export const BookStoreProvider = ({ children }: BookStoreProviderProps) => {
  return <Provider store={appStore}>{children}</Provider>;
};
