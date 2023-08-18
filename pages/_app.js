import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

import { CartProvider } from 'use-shopping-cart';

import Head from 'next/head';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useState } from 'react';

import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// redux-persist imports
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';


import user from '../reducers/user';

const reducers = combineReducers({ user });
const persistConfig = { key: 'frappadingue', storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });
 
 const persistor = persistStore(store);

 const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFF00', // Yellow color code
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <>
    <CartProvider
    mode="payment"
    cartMode="client-only"
    stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
    successUrl={`${process.env.NEXT_PUBLIC_URL}/Success`}
    cancelUrl={`${process.env.NEXT_PUBLIC_URL}/?success=false`}
    currency="EUR"
    allowedCountries={['US', 'GB', 'CA', 'FR']}
    // enables local storage
    shouldPersist={true}
  >
        <ThemeProvider theme={darkTheme}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <Head>
                <title>Frappadingue : courses à obstacles</title>
              </Head>
              <Component {...pageProps} />
              </PersistGate>
          </Provider>
        </ThemeProvider>

    </CartProvider>

    </>
  );
}

export default App;
