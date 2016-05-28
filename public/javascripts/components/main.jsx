var React = require("react");
var ReactDOM = require("react-dom");

class MyApp extends React.Component {

    render() {
        return (
          <div> Hello World</div>
        );
    }
}


window.onload = function() {
    ReactDOM.render(<MyApp />, document.getElementById("app_container"));
}


module.exports = MyApp;
