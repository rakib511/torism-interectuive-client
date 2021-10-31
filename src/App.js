
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import AddData from './component/AddData/AddData';
import NotFound from './component/NotFound/NotFound';
import Header from './component/Home/Header/Header';
import Login from './component/Login/Login/Login';
import AuthProvider from './component/context/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Service from './component/Service/Service';
import MyOrder from './component/MyOrder/MyOrder';
import ManageOrder from './component/ManageOrder/ManageOrder';
import Footer from './component/Footer/Footer';
import UpdateService from './component/Update/UpdateService';
import AddGuird from './component/AddGuird/AddGuird';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>  
          <Route exact path='/'>
            <Home></Home>
          </Route>  
          <Route exact path='/home'>
            <Home></Home>
            <Footer></Footer>
          </Route>  
          <Route exact path='/service'>
            <Service></Service>
          </Route>  
          <PrivateRoute path='/addService'>
            <AddData></AddData>
            <AddGuird></AddGuird>
          </PrivateRoute>
          <PrivateRoute path='/updateService/:serviceId'>
            <UpdateService></UpdateService>
          </PrivateRoute>
          <PrivateRoute path='/myOrder'>
            <MyOrder></MyOrder>
            <Footer></Footer>
          </PrivateRoute>
          <Route path='/manageOrder'>
            <ManageOrder></ManageOrder>
            {/* <Footer></Footer> */}
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
