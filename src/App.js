import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';
import { useRoutes } from 'react-router-dom'
import GameStart from './GameStart';
const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/details', element: <Details /> },
    { path: '/GameStart', element: <GameStart /> },
    { path: '*', element: <Error /> }]);
  return (
    routes
    // <Home />
  )
}

export default App
