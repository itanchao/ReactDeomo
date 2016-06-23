var CommentForm = React.createClass({
  handleSubmit:function(e){
    e.preventDefault;
    var author = this.refs.authorName.getDOMNode().value.trim();
    var text = this.refs.textName.getDOMNode().value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({
      author:author,
      text:text
    });
    this.refs.authorName.getDOMNode().value = "";
    this.refs.textName.getDOMNode().value ="";
    return;
  },
    render: function() {
        return (
          <form className = "CommentForm">
          <input type="text" ref = "authorName" placeholder = "Your name"/>
          <input type = "text" ref = "textName" placeholder = "Say something..." />
          <input type="button"  onClick={this.handleSubmit} value="提交" />
          </form>
        );
    }
});
