import { BrowserRouter } from 'react-router-dom';

const AppProviders = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default AppProviders;
