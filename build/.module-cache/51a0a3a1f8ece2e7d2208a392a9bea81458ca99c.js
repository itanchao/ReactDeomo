var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
    return {
        data: []
    };
},
  componentDidMount: function() {
      $.ajax({
          url: this.props.url,
          dataType: 'json',
          success: function(data) {
              this.setState({
                  data: data.data
              });
          }.bind(this),
          error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
          }.bind(this)
      });
  },
    render: function() {
        return (
           React.createElement("div", {className: "CommentBox"}, 
              React.createElement("h1", null, "Hello, World!I am a CommentBox."), 
              React.createElement(CommentList, {data: this.state.data}), 
              React.createElement(CommentForm, null)
            )
        );
    }
});
React.render(
  React.createElement(CommentBox, {url: "/Users/tanchao/Desktop/Weibo/json/weibo.json"}),
  document.getElementById('content')
);
