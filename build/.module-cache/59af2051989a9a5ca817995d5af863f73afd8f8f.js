var HelloUser = React.createClass({displayName: "HelloUser",
	render: function() {
		return (
			React.createElement("div", null, " Hello, ", this.props.name, " ")
			)
	}
});

React.render(React.createElement(HelloUser, {name: "RJ"}), document.getElementById('app'));


var FriendsContainer = React.createClass({displayName: "FriendsContainer",
	getInitialState: function() {
		return {
			name: "RJ Robinson",
			friends: ["Melissa", "Murphy", "Steve","Ryan"]
		}
	},
	render: function() {
		return (
			React.createElement("div", null, React.createElement("h3", null, " Name: ", this.state.name, " "), 
			React.createElement(ShowList, {names: this.state.friends})
			)
			)
	}
});
























// var HelloUser = React.createClass({
//     getInitialState: function() {
//         return {
//             username: '@rjrobinson'
//         }
//     },

//     handleChange: function(e) {
//         this.setState({
//             userame: e.target.value
//         });
//     },
//     render: function() {
//         return (

//             <div>Hello {this.state.username} <br />
//             Change Name: <input type="text" value={this.state.username} onChange={this.handleChange} /></div>
//         )
//     }
// });


// React.render(<HelloUser />, document.getElementById('app'));
