
const Header = React.createClass({
  render(){
    return(
      <header className='header'>
        <span className='icon'></span>
        <div className="logo">=CHL</div>
        <span className='icon'></span>
      </header>
    );
  }
});
const Content = React.createClass({
  render(){
    return(
      <h1>Content</h1>
    );
  }
});
ReactDOM.render(
  <div>
    <Header />
    <Content />
  </div>,
  document.getElementById('main')
);
