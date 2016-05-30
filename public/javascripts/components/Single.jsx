var React = require("react");
import {Link} from "react-router";
class Single extends React.Component {
    render () {
        var to = "/views/"+(Math.random() * 1000);
        return (
            <Link to = {to} >
                <div className = "post">
                </div>
            </Link>
        );
    }
}
module.exports = Single;
