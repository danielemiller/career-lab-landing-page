import React from "react";
import { Switch, Route } from "react-router-dom";

//components
import Main from "./components/Main";
import Contact from "./components/Contact";
import ThanksContact from "./components/ThanksContact";
import ThanksJoin from "./components/ThanksJoin";


const Routes = () => (
    <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/thanks/:name" component={ThanksJoin} />
        <Route exact path="/email/:email" component={ThanksContact} />
    </Switch>
);

export default Routes;
