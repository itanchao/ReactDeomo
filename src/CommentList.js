var CommentList = React.createClass({
    render: function() {
        var commentNodes = this.props.data.map(function(comment){
          return (
                <Comment author = {comment.author} text = {comment.text} >
                </Comment>);
              });
      return (
            <div className = "CommentList" backgroundColor = "red">
            {commentNodes}
            </div>
        );
    }
});
