import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class LoginForm extends React.Component {
  constructor () {
    super();
    this.state={
      username: '',
      password: ''
    };
  }
  handleLogin = () => {
    this.props.handleLogIn(this.state.username, this.state.password);
  }
  render() {
    return (
      <div className='login-form'>
      <div><h3>Login or Signup</h3></div>
      <div><TextField  floatingLabelText="Username" onChange={(event, val)=>this.setState({username: val})}/></div>
      <div><TextField  floatingLabelText="password" onChange={(event, val)=>this.setState({password: val})}/></div>
      <br/>
      <div>
        <FlatButton label="signup" onClick={this.props.handleSignUp}></FlatButton>
        <RaisedButton label="login" primary={true} onClick={this.props.handleLogIn} />
      </div>
    </div>);
  }
}

LoginForm.propTypes = {
};
