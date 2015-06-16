// var HelloWorld = React.createClass({
//     render: function() {
//         return (
//             <div> <h1>Hello World</h1> </div>
//         )
//     }
// });



var HelloUser = React.createClass({displayName: "HelloUser",
    getInitialState: function() {
        return {
            username: '@rjrobinson'
        }
    },

    handleChange: function(e) {
        this.setState({
            userame: e.target.value
        });
    },

    render: function() {
        return (

            React.createElement("div", null, "Hello ", this.state.username, " ", React.createElement("br", null), 
            "Change Name: ", React.createElement("input", {type: "text", value: this.state.username, onChange: this.handleChange}))
        )
    }
});


React.render(React.createElement(HelloUser, null), document.getElementById('app'));
