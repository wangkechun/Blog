const RightArea = React.createClass({
    render(){
        const articleList = ARTICLE;
        const articleHTML = articleList.map((article)=>{
          return(
            <li>
              <div className="inside">
                  <h2 className="title">{article.title}</h2>
                  <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                  <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                  <div className="description">{article.description}</div>
                  <div className="more"><a href=""><span>Read More</span></a></div>
              </div>
          </li>
          )
        });
        let a = 0;
        if (a == 0) {
            return (
              <div className="rightArea">
                  <div className="nav">
                      <ul>
                          {articleHTML}
                      </ul>
                  </div>
              </div>
            )
        } else {
            return (
              <div className="rightArea">
                  <div className="article">
                      <div className="inside">
                          <h2 className="title">个人博客开发</h2>
                          <i className="fa fa-tag "></i><span className="tag">project</span>
                          <i className="fa fa-calendar "></i><span className="date">2016-03-07</span>
                          <div className="description">
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo
                              impedit
                              ipsam molestias. Accusantium autem error fuga pariatur perferendis porro quibusdam
                              quod reiciendis? Exercitationem qui quos repellat repudiandae sequi sunt?
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo
                              impedit
                              ipsam molestias. Accusantium autem error fuga pariatur perferendis porro quibusdam
                              quod reiciendis? Exercitationem qui quos repellat repudiandae sequi sunt?
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo
                              impedit
                              ipsam molestias. Accusantium autem error fuga pariatur perferendis porro quibusdam
                              quod reiciendis? Exercitationem qui quos repellat repudiandae sequi sunt?
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet explicabo
                              impedit
                              ipsam molestias. Accusantium autem error fuga pariatur perferendis porro quibusdam
                              quod reiciendis? Exercitationem qui quos repellat repudiandae sequi sunt?
                          </div>

                      </div>
                  </div>
              </div>

            );
        }
    }
});
const LeftArea = React.createClass({
    render(){
        return (
          <div className="leftArea">
              <div className="classify">
                  <div className="head"><h2>文章分类</h2></div>
                  <nav>
                      <ul>
                          <li><a href="">ALL<i className="fa fa-angle-double-right "></i></a></li>
                          <li><a href="">HTML/CSS<i className="fa fa-angle-double-right "></i></a></li>
                          <li><a href="">JavaScript<i className="fa fa-angle-double-right "></i></a></li>
                          <li><a href="">Project<i className="fa fa-angle-double-right "></i></a></li>
                          <li><a href="">React<i className="fa fa-angle-double-right "></i></a></li>
                          <li><a href="">随笔<i className="fa fa-angle-double-right "></i></a></li>
                      </ul>
                  </nav>
              </div>
          </div>
        )
    }
});
const Content = React.createClass({
    render(){
        return (
          <div className="main">
              <div className="content" style={changeMarginTop(this.props.wheel)}>
                  <LeftArea />
                  <RightArea />
              </div>
          </div>
        );
    }
});
const Header = React.createClass({
    render(){
        return (
          <header className='header' style={changeHeight(this.props.wheel)}>
              <nav>
                  <ul>
                      <li>
                          <a href="https://hi-hi.cn/chlblog/" target="_blank">Home</a>
                      </li>
                      <li>
                          <a href="https://hi-hi.cn/chlblog/" target="_blank">Resume</a>
                      </li>
                      <li>
                          <a href="#" target="_blank">Project</a>
                      </li>
                  </ul>
              </nav>
              <div className="logoSmall" style={css_display(this.props.wheel)}>CaoHuilin</div>
              <div className="logo" style={css_display(!this.props.wheel)}>=CHL</div>
              <span style={css_display(!this.props.wheel)}>Pursue beauty , Approach beauty , Achieve beauty</span>
          </header>
        )
    }
});
const Footer = React.createClass({
    render(){
        return (
          <footer id="footer">
              <div className="con">
                  <ul className="nav">
                      <li>
                          <a href="https://hi-hi.cn/chlblog/" target="_blank">Home</a>
                      </li>
                      <li>
                          <a href="https://hi-hi.cn/chlblog/" target="_blank">Resume</a>
                      </li>
                      <li>
                          <a href="#" target="_blank">Project</a>
                      </li>
                  </ul>
                  <ul className="contact">
                      <li><i className="fa fa-qq"></i>1057275848</li>
                      <li><i className="fa fa-phone"></i>151 7326 6529</li>
                      <li><i className="fa fa-github"></i><a href="https://github.com/caohuilin" target="_blank">github.com/caohuilin</a>
                      </li>
                  </ul>
              </div>
          </footer>
        );
    }
});
const Main = React.createClass({
    getInitialState(){
        return {wheel: false}
    },
    componentDidMount(){
        let scrollTop = document.body.scrollTop;
        console.log(scrollTop);
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
