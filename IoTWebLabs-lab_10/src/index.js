import React from 'react';
import { createRoot } from 'react-dom/client'; // Змінено імпорт createRoot на react-dom/client
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store, persistor } from "./Components/Cart/store";
import { PersistGate } from 'redux-persist/integration/react';

// Використовуємо createRoot замість ReactDOM.render
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

