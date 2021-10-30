import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AddNewService from "./components/AddNewService/AddNewService";
import Footer from "./components/Footer/Footer";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login";
import ManageOrders from "./components/ManageOrders/ManageOrders";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AuthProvider from "./Context/AuthProvider";
import NewServiceProvider from "./Context/NewServiceProvider";
import PlaceProvider from "./Context/PlaceProvider";
const App = () => {
  return (
    <AuthProvider>
      <NewServiceProvider>
        <PlaceProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home></Home>
              </Route>
              <Route path="/home">
                <Home></Home>
              </Route>
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/addnewservice">
                <AddNewService></AddNewService>
              </Route>
              <PrivateRoute path="/orders">
                <Orders></Orders>
              </PrivateRoute>
              <PrivateRoute exact path="/order/:orderId">
                <PlaceOrder></PlaceOrder>
              </PrivateRoute>
              <PrivateRoute path="/manageorders">
                <ManageOrders></ManageOrders>
              </PrivateRoute>
              <Route path="*">
                <NotFound></NotFound>
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </PlaceProvider>
      </NewServiceProvider>
    </AuthProvider>
  );
};

export default App;
