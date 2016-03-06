const RightArea = React.createClass({
    render(){
        const articleList = ARTICLE;
        let TagHTML=[], TagJs=[], TagProject=[], TagReact=[], TagOther=[] ,TagLife=[];
        const ALLArticleHTML = articleList.map((article)=> {
            switch (article.tag) {
                case "HTML/CSS" :
                    TagHTML.push(<li key={article.id}>
                        <div className="inside">
                            <h2 className="title">{article.title}</h2>
                            <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                            <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                            <div className="description">{article.description}</div>
                            <div className="more"><a onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                        </div>
                    </li>);
                    break;
                case "JavaScript" :
                    TagJs.push(
                      <li key={article.id}>
                          <div className="inside">
                              <h2 className="title">{article.title}</h2>
                              <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                              <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                              <div className="description">{article.description}</div>
                              <div className="more"><a  onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                          </div>
                      </li>
                    );
                    break;
                case "Project" :
                    TagProject.push(
                      <li key={article.id}>
                          <div className="inside">
                              <h2 className="title">{article.title}</h2>
                              <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                              <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                              <div className="description">{article.description}</div>
                              <div className="more"><a onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                          </div>
                      </li>
                    );
                    break;
                case "React":
                    TagReact.push(
                      <li key={article.id}>
                          <div className="inside">
                              <h2 className="title">{article.title}</h2>
                              <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                              <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                              <div className="description">{article.description}</div>
                              <div className="more"><a onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                          </div>
                      </li>
                    );
                    break;
                case "其他":
                    TagOther.push(
                      <li key={article.id}>
                          <div className="inside">
                              <h2 className="title">{article.title}</h2>
                              <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                              <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                              <div className="description">{article.description}</div>
                              <div className="more"><a onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                          </div>
                      </li>
                    );
                    break;
                case "随笔":
                    TagLife.push(
                      <li key={article.id}>
                          <div className="inside">
                              <h2 className="title">{article.title}</h2>
                              <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                              <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                              <div className="description">{article.description}</div>
                              <div className="more"><a onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                          </div>
                      </li>
                    );
            }
            return (
              <li key={article.id}>
                  <div className="inside">
                      <h2 className="title">{article.title}</h2>
                      <i className="fa fa-tag "></i><span className="tag">{article.tag}</span>
                      <i className="fa fa-calendar "></i><span className="date">{article.date}</span>
                      <div className="description">{article.description}</div>
                      <div className="more"><a onClick={this.props.showArticle.bind(null,article)}><span>Read More</span></a></div>
                  </div>
              </li>
            )
        });
        let listHTML;
        switch(this.props.tag){
            case "HTML/CSS":listHTML = TagHTML;break;
            case "JavaScript":listHTML = TagJs;break;
            case "Project": listHTML = TagProject;break;
            case "React":listHTML = TagReact;break;
            case "其他": listHTML = TagOther;break;
            case "随笔": listHTML = TagLife;break;
            case "ALL" : listHTML = ALLArticleHTML;
        }

        if (!this.props.show) {
            console.log('render RightArea', listHTML, listHTML.length);
            return (
              <div className="rightArea">
                  <div className="nav">
                      <ul>
                          {listHTML}
                      </ul>
                  </div>
              </div>
            )
        } else {
            let articleHTML = (
              <div className="inside">
                  <h2 className="title">{this.props.article.title}</h2>
                  <i className="fa fa-tag "></i><span className="tag">{this.props.article.tag}</span>
                  <i className="fa fa-calendar "></i><span className="date">{this.props.article.date}</span>
                  <div className="description">
                      {this.props.article.content}
                  </div>
              </div>
            );
            return (
              <div className="rightArea">
                  <div className="article">
                      {articleHTML}
                  </div>
              </div>

            );
        }
    }
});