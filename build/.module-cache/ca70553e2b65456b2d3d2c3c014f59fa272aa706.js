var CommentBox = React.createClass({displayName: "CommentBox",
    render: function() {
        return (
           React.createElement("div", {className: "CommentBox"}, 
              React.createElement("h1", null, "Hello, World!I am a CommentBox."), 
              React.createElement(CommentList, {data: this.props.data}), 
              React.createElement(CommentForm, null)
            )
        );
    }
});
