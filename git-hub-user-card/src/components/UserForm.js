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
        console.log(this.state.user)
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('submitting');
        this.props.getUser(this.state.user);
        this.setState({
            ...this.state,
            user: ''
        })
    }
   
    render() {
        return (
            <div>
                <form>
                    <label>Input Username: </label>
                    <input type = 'text' onChange = {this.handleChange}/>
                    <button onClick = {this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm;