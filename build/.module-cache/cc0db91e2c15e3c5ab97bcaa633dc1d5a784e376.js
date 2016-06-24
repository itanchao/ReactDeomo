var CommentBox = React.createClass({displayName: "CommentBox",
  loadCommentsFromServer:function(){
    var nowstr = new Date()
    // var urlstr = this.props.url + "?a="+ nowstr.toString();
    var urlstr = this.props.url;
    $.ajax({
      url:urlstr,
      dataType:'json',
      success:function(data){
        this.setState({data:data.data});
        console.log(data);
      }.bind(this),
      error:function(xhr,status,err){
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    });
  },
  getInitialState:function(){
    console.log("getInitialState");
    return {data:[]}

  },
  componentDidMount:function(){
    console.log("componentDidMount");
    this.loadCommentsFromServer();
    // setInterval(this.loadCommentsFromServer,this.props.pulltime);
  },
  handleCommentSubmit: function(comment) {
    var comments = this.state.data;
    var newComments = comments.concat([comment]);
    this.setState({
      data:newComments
    });
    window.scrollTo(0,document.body.scrollHeight);
    $.ajax({
      url:this.props.url,
      dataType:'json',
      type:'POST',
      data:comment,
      success:function(data){
        // this.setState({
        //   data:data.data
        // });
      }.bind(this),
      error:function(xhr,status,err){
        console.error(this.props.url,status,err.toString());
      }.bind(this)
    });
  },
  render:function(){
    return (
    React.createElement("div", {className: "CommentBox"}, 
    React.createElement(CommentList, {data: this.state.data}), 
    React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
    )
    );
  }
});

React.render(
  React.createElement(CommentBox, {url: "/Users/tanchao/Desktop/ReactDeomo/json/weibo.json", pulltime: 2000}),
  document.getElementById('content')
);
