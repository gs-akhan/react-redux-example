var React = require("react");
var SinglePost = require("./Single");

class PhotoGrid extends React.Component {
    render() {
        return (
            <div className="photo-grid">
                <SinglePost></SinglePost>
                <SinglePost></SinglePost>
                <SinglePost></SinglePost>

                <SinglePost></SinglePost>
                <SinglePost></SinglePost>
                <SinglePost></SinglePost>
                <SinglePost></SinglePost>


            </div>
        );
    }
}

module.exports = PhotoGrid;