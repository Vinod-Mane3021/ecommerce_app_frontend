"use client";
import { persistor, store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'

interface Props {
  children: React.ReactElement;
}

const ChildLayout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
};

export default ChildLayout;
