var React = require("react");

var ReactDOM = require("react-dom");

var Instagram = require("./Instagram");
var PhotoGrid = require("./PhotoGrid");
var Single  = require("./Single");

require("../../stylesheets/style.css");

import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from "../store";


const router = (
    <Router history = {browserHistory}>
        <Route path = "/" component = {Instagram}>
            <IndexRoute component = {PhotoGrid}></IndexRoute>
            <Route path = "/views/:postId" component = {Single}></Route>
        </Route>
    </Router>
);

window.onload = function() {
    ReactDOM.render(router, document.getElementById("app_container"));
}