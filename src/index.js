import ReactDOM from 'react-dom/client';
import PaymentForm from './pages/PaymentForm';
import { DataProvider } from './context/provider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <PaymentForm />
  </DataProvider>
);
