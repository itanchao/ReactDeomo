var CommentBox = React.createClass({
  loadCommentsFromServer:function(){
    var nowstr = new Date()
    var urlstr = this.props.url + "?a="+ nowstr.toString();
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
    setInterval(this.loadCommentsFromServer,this.props.pulltime);
  },
  render:function(){
    return (
    <div className = "CommentBox">
    <h1>Comment</h1>
    <CommentList data = {this.state.data}/>
    <CommentForm/></div>
    );
  }
});

React.render(
  <CommentBox url = "/Users/tanchao/Desktop/ReactDeomo/json/weibo.json" pulltime={2000} />,
  document.getElementById('content')
);
