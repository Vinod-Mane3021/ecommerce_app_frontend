"use client";
import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactElement;
}

const ChildLayout = ({ children }: Props) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
};

export default ChildLayout;
