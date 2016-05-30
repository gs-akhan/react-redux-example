var React = require("react");
import {Link} from "react-router";


class MyApp extends React.Component {

    render() {
        return (
            <div>
             <h1><Link to = "/">Baegram</Link></h1>
                {this.props.children}
            </div>
        );
    }
}

module.exports = MyApp;