import React, { createContext, ReactNode } from 'react';
import useFetch from '../hooks/useFetch';

interface DataContextType {
  data: any[];
  loading: boolean;
  error: Error | null;
}

const defaultValue: DataContextType = {
  data: [],
  loading: false,
  error: null,
};

export const DataContext = createContext<DataContextType>(defaultValue);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
