import React from "react";
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/Productcontext";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { Auth0Provider } from "@auth0/auth0-react";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <Auth0Provider
    domain="dev-ovorky2yxac5ksi0.us.auth0.com"
    clientId="D6w8kOWArUdHJKMBNyOuPmmMh06IDebJ"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </Auth0Provider>
);

reportWebVitals();

// const express = require('express');
// const app = express();

// // import the 'cors' middleware
// const cors = require('cors');

// // specify the CORS options
// const corsOptions ={
//   origin:'http://localhost:3000', 
//   credentials:true,          
//   optionSuccessStatus:200
// }

// // apply the CORS middleware to allow cross-origin requests
// app.use(cors(corsOptions));

// // start the server
// app.listen(8080, () => {
//   console.log('Server started on port 8080');
// });
