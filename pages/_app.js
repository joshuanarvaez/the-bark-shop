import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components';
import '../styles/globals.css'
import { StateContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return (
    // We wrap our entire app in StateContext so we can pass the data into every single component inside of it.
    <StateContext>
      <Layout>
      <Toaster/>
    {/* Below is the component we are currently on - wrap it with our layout component and pass it as "children" prop to our layout component. Then, render it in main section of layout to ensure proper setup. */}
        <Component {...pageProps} /> 
      </Layout>
    </StateContext>
    
  ) 
}

export default MyApp;
