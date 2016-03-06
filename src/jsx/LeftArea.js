const LeftArea = React.createClass({
    render(){
        return (
          <div className="leftArea">
              <div className="classify">
                  <div className="head"><h2>文章分类</h2></div>
                  <nav>
                      <ul>
                          <li onClick={this.props.changeTag.bind(null,"ALL")}><a>ALL<i className="fa fa-angle-double-right "></i></a></li>
                          <li onClick={this.props.changeTag.bind(null,"HTML/CSS")}><a >HTML/CSS<i className="fa fa-angle-double-right "></i></a></li>
                          <li onClick={this.props.changeTag.bind(null,"JavaScript")}><a >JavaScript<i className="fa fa-angle-double-right "></i></a></li>
                          <li onClick={this.props.changeTag.bind(null,"Project")}><a >Project<i className="fa fa-angle-double-right "></i></a></li>
                          <li onClick={this.props.changeTag.bind(null,"React")}><a >React<i className="fa fa-angle-double-right "></i></a></li>
                          <li onClick={this.props.changeTag.bind(null,"其他")}><a >其他<i className="fa fa-angle-double-right "></i></a></li>
                          <li onClick={this.props.changeTag.bind(null,"随笔")}><a >随笔<i className="fa fa-angle-double-right "></i></a></li>
                      </ul>
                  </nav>
              </div>
          </div>
        )
    }
});
