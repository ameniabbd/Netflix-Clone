import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Loged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
        console.log(userAuth);
      } else {
        //logged out
        dispatch(logout);
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
