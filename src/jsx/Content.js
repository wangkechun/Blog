const Content = React.createClass({
    getInitialState(){
        return ({tag: "ALL" ,show:false,article:null});
    },
    changeTag(tag){
        console.log('changeTag', tag);
        this.setState({tag: tag,show:false});
    },
    showArticle(article){
      this.setState({show:true,article:article});
    },
    render(){
        return (
          <div className="main">
              <div className="content" style={changeMarginTop(this.props.wheel)}>
                  <LeftArea changeTag={this.changeTag}/>
                  <RightArea tag={this.state.tag} showArticle={this.showArticle} show={this.state.show} article={this.state.article}/>
              </div>
          </div>
        );
    }
});