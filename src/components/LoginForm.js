import React, {PropTypes} from 'react';
import GoogleLogin from 'react-google-login';

import CircularProgress from 'material-ui/CircularProgress';
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

  googleAuthSuccess = (response) => {
    console.log(response);
    let payLoad = {
      userInfo: response.profileObj,
      tokenId: response.tokenId
    };
    this.props.handleOAuthLogIn(true, payLoad);
  }

  googleAuthfailed = (response) => {
    console.log(response);
    this.props.handleOAuthLogIn(false, 'failed to login...');
  }

  render() {
    return (
      <div className='login-form'>
      <div><h3>Login or Signup</h3></div>
      <div><TextField floatingLabelText="Username" onChange={(event, val)=>this.setState({username: val})}/></div>
      <div><TextField type='password' floatingLabelText="password" onChange={(event, val)=>this.setState({password: val})}/></div>
      <br/>
      <div>
        <FlatButton label="signup" onClick={this.props.handleSignUp}></FlatButton>
        <RaisedButton
          label={!this.props.aSyncCall && "login"}
          primary={true}
          onClick={() => this.props.handleLogIn(this.state.username, this.state.password)}>
            {this.props.aSyncCall && <CircularProgress size={30} color='white'/>}
        </RaisedButton>
      </div>
      <GoogleLogin
        clientId="73175440911-t81rmqp1ij2f9tt8jupiqksd1srrot79.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={this.googleAuthSuccess}
        onFailure={this.googleAuthfailed}
      />
    </div>);
  }
}

LoginForm.propTypes = {
};
