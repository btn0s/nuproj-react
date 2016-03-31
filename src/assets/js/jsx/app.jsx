// tutorial1.js
var TopBar = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <a>LINK</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});
ReactDOM.render(
  <TopBar />,
  document.getElementById('content')
);
