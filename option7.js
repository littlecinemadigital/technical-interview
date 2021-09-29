// Setup how to use context provider and consumer to update state in its child components.

import React, { createContext, useContext, useState } from 'react';

const defaultData = {data: null, setData: () => {}}

const AppContext = createContext(defaultData);

const useApp = () => {
  const [data, setData] = useState();
  return {data, setData};
}

const AppProvider = ({children}) => {
  const {data, setData} = useApp();
  return (
    <AppContext.Provider values={{data, setData}}>
      {children}
    </AppContext.Provider>
  )
}

const App = () => {
  return (
    <AppProvider>
      <MyComponent />
    </AppProvider>
  )
}

const MyComponent = () => {
  const data = useContext(AppContext);
  // we can use this data
  return (
    <div></div>
  )
}

// Step 2: Write out a pseudo component that would consume the context from the App component
