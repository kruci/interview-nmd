"use client";
import { Provider } from "react-redux";
import { store } from "./store";

type BookStoreProviderProps = {
  children: React.ReactNode;
};

export const BookStoreProvider = ({ children }: BookStoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
