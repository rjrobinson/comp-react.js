var MessageBox = React.createClass({
  render: function() {
    return (
    	<div>
      	<h1>Hello, World </h1>
      </div>
    );
  }
});

React.render(
  <MessageBox />,
  document.getElementById('app'),
  function () {
    console.log('after render');
  }
)
