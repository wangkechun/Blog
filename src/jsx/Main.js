const Main = React.createClass({
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
              <Content wheel={this.state.wheel}/>
              <Footer />
          </div>

        );
    }
});
ReactDOM.render(
  <div >
      <Main />
  </div>
  ,
  document.getElementById('main')
);
