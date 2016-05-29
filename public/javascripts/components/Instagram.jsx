
var React = require("react");

class MyApp extends React.Component {

    render() {
        return (
            <div>
             <h1>Baegrama</h1>
            {this.props.children}
            </div>
        );
    }
}

module.exports = MyApp;