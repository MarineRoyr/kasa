import { createBrowserRouter } from 'react-router-dom';
import '../assets/styles/App.scss';
import HomePage from './pages/homePage';
import APropos from './pages/aPropos';
import Appartment from './pages/appartment';
import Error from './pages/error';
import Layout from './layout'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <div className='Body'> <Layout/> </div>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      },
      {
        path: 'a-propos',
        element: <APropos />
      },
      {
     
        path: 'appartment/:id',
        element: <Appartment />
      }
    ]
  }
]);

export default Router;