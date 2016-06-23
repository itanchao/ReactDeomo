var CommentBox = React.createClass({displayName: "CommentBox",
    getInitialState: function() {
        return {
            data: []
        };
    },
    render: function() {
        return (
          React.createElement("div", {className: "CommentBox"}, 
            React.createElement("h1", null, " Hello, World!I am a CommentBox. "), 
            React.createElement(CommentList, {data: 
                this.props.data
            }), 
            React.createElement(CommentForm, null/)
            )
        );
    }
});
var data = [{
    author: "Peter Hunt",
    text: "this is Peter Hunter"
}, {
    author: "John Stone",
    text: "this is John Stone"
}, {
    author: "John Stone",
    text: "this is John Stone"
}, {
    author: "John Stone",
    text: "this is John Stone"
}];
React.render( React.createElement(CommentBox, {data: data}),
    document.getElementById('content')
);
