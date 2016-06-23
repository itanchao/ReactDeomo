var CommentForm = React.createClass({displayName: "CommentForm",
  handleSubmit:function(e){
    e.preventDefault;
    // var author = this.refs.author.getDOMNode().value.trim();
    // var text = this.refs.text.getDOMNode().value.trim();
    // if (!text || !author) {
    //   return;
    // }
    this.props.onCommentSubmit({
      author:"author",
      text:"text"
    });
    // this.refs.author.getDOMNode().value = "";
    // this.refs.text.getDOMNode().value ="";
    return;
  },
    render: function() {
        return (
          React.createElement("form", {className: "CommentForm"}, 
          React.createElement("input", {type: "text", ref: "author", placeholder: "Your name"}), 
          React.createElement("input", {type: "text", ref: "text", placeholder: "Say something..."}), 
          React.createElement("input", {type: "button", onClick: this.handleSubmit, value: "提交"})
          )
        );
    }
});
