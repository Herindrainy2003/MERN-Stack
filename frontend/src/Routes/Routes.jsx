import { createBrowserRouter } from "react-router-dom";
import Login from '../Modules/login/component/login';
import Card from "../Modules/Card/component/card";
//import Addpub from './../component/AddPub/Addpub';
 

const routes = [
  {
    path: '/',
    element: <Login />,
    
  },
  {
    path : '/card',
    element : <Card />
  },

]

const Routes = createBrowserRouter(routes)

export default Routes;