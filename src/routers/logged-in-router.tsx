import React from "react";
import { useMe } from "../hooks/useMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserRole } from "../__generated__/globalTypes";
import { NotFound } from "../pages/404";
import { Header } from "../components/header";
import { ConfirmEmail } from "../pages/user/confirm-email";
import { Restaurants } from "../pages/client/restaurants";
import { Restaurant } from "../pages/client/restaurant";
import { EditProfile } from "../pages/user/edit-profile";
import { MyRestaurants } from "../pages/owner/my-restaurants";
import { Dashboard } from "../pages/driver/dashboard";
import { AddRestaurant } from "../pages/owner/add-restaurants";
import { MyRestaurant } from "../pages/owner/my-restaurant";
import { AddDish } from "../pages/owner/add-dish";

const clientRoutes = [{ path: "/", component: <Restaurants /> }];

const commonRoutes = [
  { path: "/confirm", component: <ConfirmEmail /> },
  { path: "/edit-profile", component: <EditProfile /> },
];

const restaurantRoutes = [
  { path: "/", component: <MyRestaurants /> },
  { path: "/add-restaurant", component: <AddRestaurant /> },
  { path: "/restaurants/:id", component: <MyRestaurant /> },
  { path: "/restaurants/:restaurantId/add-dish", component: <AddDish /> },
];

const driverRoutes = [{ path: "/", component: <Dashboard /> }];

export const LoggedInRouter = () => {
  const { data, loading, error } = useMe();
  if (!data || loading || error) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="font-medium text-xl tracking-wide">Loading...</span>
      </div>
    );
  }
  return (
    <Router>
      <Header />
      <Switch>
        {data.me.role === UserRole.Client &&
          clientRoutes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}
        {data.me.role === UserRole.Owner &&
          restaurantRoutes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}
        {data.me.role === UserRole.Delivery &&
          driverRoutes.map((route) => (
            <Route exact key={route.path} path={route.path}>
              {route.component}
            </Route>
          ))}
        {commonRoutes.map((route) => (
          <Route exact key={route.path} path={route.path}>
            {route.component}
          </Route>
        ))}
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};
