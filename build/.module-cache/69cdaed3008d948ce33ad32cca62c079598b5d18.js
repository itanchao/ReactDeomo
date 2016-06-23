var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {
        data: []
    };
},
  componentDidMount: function(){
    $.ajax({
      url:this.props.url,
      dataType:'json',
      success:function(data){
        this.setState({
          data:data
        });
      }.bind(this)
    });
  },
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
React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);
