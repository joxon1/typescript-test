import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import ApiPages from "./pages/ApiPages";
import NumberPages from "./pages/NumberPages";
import TodoPages from "./pages/TodoPages";
const App: FC = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/todo" component={TodoPages} exact />
        <Route path="/number" component={NumberPages} exact />
        <Route path="/api" component={ApiPages} exact />
      </Switch>
    </>
  );
};

export default App;
