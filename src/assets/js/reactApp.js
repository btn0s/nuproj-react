"use strict";

// tutorial1.js
var TopBar = React.createClass({
  displayName: "TopBar",

  render: function () {
    return React.createElement(
      "div",
      { className: "top-bar" },
      React.createElement(
        "div",
        { className: "top-bar-right" },
        React.createElement(
          "ul",
          { className: "menu" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              null,
              "LINK"
            )
          )
        )
      )
    );
  }
});
ReactDOM.render(React.createElement(TopBar, null), document.getElementById('content'));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsSUFBSSxTQUFTLE1BQU0sV0FBTixDQUFrQjs7O0FBQzdCLFVBQVEsWUFBVztBQUNqQixXQUNFOztRQUFLLFdBQVUsU0FBVixFQUFMO01BQ0U7O1VBQUssV0FBVSxlQUFWLEVBQUw7UUFDRTs7WUFBSSxXQUFVLE1BQVYsRUFBSjtVQUNFOzs7WUFDRTs7OzthQURGO1dBREY7U0FERjtPQURGO0tBREYsQ0FEaUI7R0FBWDtDQURHLENBQVQ7QUFlSixTQUFTLE1BQVQsQ0FDRSxvQkFBQyxNQUFELE9BREYsRUFFRSxTQUFTLGNBQVQsQ0FBd0IsU0FBeEIsQ0FGRiIsImZpbGUiOiJyZWFjdEFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHR1dG9yaWFsMS5qc1xyXG52YXIgVG9wQmFyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1iYXItcmlnaHRcIj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8YT5MSU5LPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8VG9wQmFyIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuKTtcclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
