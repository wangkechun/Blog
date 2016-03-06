const Main = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    componentWillMount(){
        //给路径赋默认值
        var params = this.props.params;
        if (!params.tag && !params.articleId) {
            this.context.router.push("/tag/" + "ALL");
        }
    },
    getInitialState(){
        return {wheel: false}
    },
    componentDidMount(){
        let scrollTop = document.body.scrollTop;
        if (scrollTop > 0) {
            this.setState({wheel: true});
        }
    },
    onWheelDown(event){
        let deltaY = event.nativeEvent.deltaY;
        let scrollTop = document.body.scrollTop;
        if (deltaY > 40 && scrollTop == 0) {
            this.setState({wheel: true});
        } else if (deltaY < -40 && scrollTop == 0) {
            this.setState({wheel: false});
        }
    },
    render(){
        return (
          <div onWheel={this.onWheelDown}>
              <Header wheel={this.state.wheel}/>
              <Content wheel={this.state.wheel} params={this.props.params}/>
              <Footer />
          </div>

        );
    }
});

