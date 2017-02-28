import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

export default class SignupForm extends React.Component {
  render() {
    return (
      <div className='login-form'>
      <div><h3>Login or Signup</h3></div>
      <div><TextField  floatingLabelText="Username" /></div>
      <div><TextField  floatingLabelText="password" /></div>
      <div><TextField  floatingLabelText="confirm password" /></div>
      <br/>
      <div><FlatButton label="signup" onClick={this.props.handleSignUp}></FlatButton></div>
    </div>);
  }
}

SignupForm.propTypes = {
};
