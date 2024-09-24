import React from 'react';
import ReactDOM from 'react-dom/client';
import Payment from './pages/Payment';
import { DataProvider } from './context/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <Payment/>
  </DataProvider>
);
