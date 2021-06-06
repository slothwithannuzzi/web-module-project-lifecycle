import React from 'react'

class UserForm extends React.Component {
   
    constructor() {
        super();
        this.state = {
            user: ''
        }
    }

    handleChange = e => {
        this.setState ({
            ...this.state,
            user: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitting');
        this.props.getUser(this.state.user);
        this.setState({
            ...this.state,
            user: ""
        })
    }
   
    render() {
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Input Username: </label>
                    <input type = 'text' value ={this.state.user} onChange = {this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm;