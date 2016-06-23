var converter = new Showdown.converter();
var Comment = React.createClass({displayName: "Comment",
    render: function() {
      // var rawMarkup = converter.makeHtml(this.props.children.toString());
        return (
          React.createElement("div", {className: "Comment"}, 
            React.createElement("h2", {className: "CommentAuthor"}, this.props.author), 
            React.createElement("h3", {className: "CommentText"}, this.props.text)
          )
        );
    }
});
