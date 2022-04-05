import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import "remixicon/fonts/remixicon.css";
import "./index.scss";

import SafeComponents from "./SafeComponent"
import Footer from "home/Footer";
import Header from "home/Header";
import PDPContent from "./PDPContent"

const App = () => {
    return (
        <Router>
        <div className="text-3xl mx-auto max-w-6xl">
            <SafeComponents>
             <Header />
             </SafeComponents>
             <div className="my-10">
                 <Switch>
                     <Route path="/product/:id" component={PDPContent} />
                 </Switch>
             </div>
            <Footer />
        </div>
        </Router>
    )
}
ReactDOM.render(<App />, document.getElementById("app"));
