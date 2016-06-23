var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit:function(e){
    alert("haha");
    e.preventDefault;
    var author = this.refs.author.getDOMNode().value.trim();
    var text = this.refs.text.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({
      author:author,
      text:text
    });
    this.refs.author.getDOMNode().value = "";
    this.refs.text.getDOMNode().value ="";
    return;
  },
    render: function() {
        return (
          React.createElement("form", {className: "CommentForm", onSubmit: this.handleSubmit}, 
          React.createElement("input", {type: "text", refs: "author", placeholder: "Your name"}), 
          React.createElement("input", {type: "text", refs: "text", placeholder: "Say something..."}), 
          React.createElement("input", {type: "submit", value: "提交"})
          )
        );
    }
});
