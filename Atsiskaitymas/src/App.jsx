
import './App.css'
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../src/components/Home';
import { Root } from '../src/components/Root';
import  AddTutorial  from '../src/components/AddTutorial';
import TutorialsList from '../src/components/TutorialList';
import TutorialDetails from '../src/components/TutorialDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    id: "root",
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "tutorials",
        element: <TutorialsList />,
      },
      {
        path: "tutorials/:id",
        element: <TutorialDetails />,
      },
      
      {
        path: "description",
        element: <AddTutorial/>,
      },

    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
