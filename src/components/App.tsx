import { useReactiveVar } from "@apollo/client";
import React from "react";
import { isLoggedInVar } from "../apollo";
import { LoggedOutRouter } from "../routers/logged-out-router";
import { LoggedInRouter } from "../routers/logged-in-router";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  console.log("App isLoggedIn==>", isLoggedIn);
  return isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />;
}

export default App;
