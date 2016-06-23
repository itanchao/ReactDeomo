var CommentBox = React.createClass({
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
           <div className = "CommentBox" >
              <h1>Hello, World!I am a CommentBox.</h1>
              <CommentList data = {this.state.data} />
              <CommentForm/>
            </div>
        );
    }
});
React.render(
  <CommentBox url = "./json/weibo.json"/>,
  document.getElementById('content')
);
