var MessageBox = React.createClass({displayName: "MessageBox",
  render: function() {
    return (
    	React.createElement("div", null, 
      	React.createElement("h1", null, "Hello, World ")
      )
    );
  }
});

React.render(
  React.createElement(MessageBox, null),
  document.getElementById('app'),
  function () {
    console.log('after render');
  }
)
