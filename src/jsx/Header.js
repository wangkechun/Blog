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