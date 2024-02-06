"use client";
import { persistor, store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'

interface Props {
  children: React.ReactElement;
}

const queryClient = new QueryClient()

const MainLayout = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  )
};

export default MainLayout;
