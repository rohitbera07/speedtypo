import {createBrowserRouter} from 'react-router-dom'
import App from './App'
import Typing from './Typing';
import Score from './Score';
import { Auth0Provider } from '@auth0/auth0-react';
const router = createBrowserRouter([
    {
        path:'/',
        element:<Auth0Provider
    domain="dev-46mmw7u8thghfmdx.us.auth0.com"
    clientId="HEnnNK0DqpQxLcnY7OwfjXHrWxuUWXoy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>
    },
    {
        path:'/typing',
        element:<Auth0Provider
    domain="dev-46mmw7u8thghfmdx.us.auth0.com"
    clientId="HEnnNK0DqpQxLcnY7OwfjXHrWxuUWXoy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Typing />
  </Auth0Provider>
    },
    {
        path:'/score',
        element:<Auth0Provider
    domain="dev-46mmw7u8thghfmdx.us.auth0.com"
    clientId="HEnnNK0DqpQxLcnY7OwfjXHrWxuUWXoy"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <Score/>
  </Auth0Provider> 
    }
]);

export default router;