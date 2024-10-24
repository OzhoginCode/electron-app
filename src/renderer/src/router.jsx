import { createBrowserRouter } from 'react-router-dom';

import App from './App.jsx';

import NewUserPage from './pages/NewUserPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/new-user-form',
    element: <NewUserPage />,
  },
]);

export default router;
