import {connect} from 'react-redux';
import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import * as actions from '../actions/actionCreators';

import Modal from 'react-modal';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import AppbarRightControlDesktop from './AppbarRightControlDesktop';
import AppbarRightControlMobile from './AppbarRightControlMobile';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Snackbar from 'material-ui/Snackbar';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';

import {List, ListItem} from 'material-ui/List';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import Logo from '../../images/techpin.png';
import categories from '../helpers/categories';

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(0, 0, 0, 0.4)',
  },
};
const toolbarStyle = {
  height: '45px',
  backgroundColor: '#304FFE',
};
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen  : false,
      drawerIsOpen : false,
      view         : 'login',
      aSyncCall    : false,
      snackBarOpen : false,
      responseText : '',
    }
  }

  componentDidMount = () => {
    this.setState({windowWidth: window.innerWidth});
    window.addEventListener('resize', () => this.setState({windowWidth: window.innerWidth}));
  }

  openModal = () => {
   this.setState({modalIsOpen: true});
 }

  closeModal = () => {
   this.setState({modalIsOpen: false, view: 'login'});
 }

  openModal = () => {
   this.setState({modalIsOpen: true});
 }

  handleDrawerToggle = () => this.setState({drawerIsOpen: !this.state.drawerIsOpen});

  handleDrawerClose = () => this.setState({drawerIsOpen: false});

  handleSignUp = (formData) => {
    if (this.state.view === 'login') {
      this.setState({view: 'signup'})
    } else {
      this.setState({aSyncCall: true});
      this.props.signupUser(formData)
        .then((response) => this.setState({
          modalIsOpen: false,
          snackBarOpen: true,
          responseText: response}));
    }
 }
  handleLogOut = () => {
    this.props.logOut();
    this.setState({responseText: 'You signed out'});
    this.openModal();
  }
  handleLogIn = (username, password) => {
  this.setState({aSyncCall: true});
   this.props.authenticate(username, password)
   .then(() => this.setState({
     modalIsOpen: false,
     snackBarOpen: true,
     aSyncCall: false,
     responseText: 'You are now authenticated'}));
 }

 handleRequestSnackBarClose = () => {
    this.setState({
      snackBarOpen: false,
    });
  };

  render() {
    return (
      <div>
        <AppBar
          className={'app-bar'}
          title={<Link to='/'><img src={Logo} className='logo-img'/></Link>}
          showMenuIconButton={false}
          iconElementRight={
            this.state.windowWidth > 600 ?
            <AppbarRightControlDesktop
              authenticated={this.props.authenticated}
              openModal={this.openModal}
              handleDrawerToggle={this.handleDrawerToggle}
              LogOut={this.handleLogOut} /> :
            <AppbarRightControlMobile />
          }
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          overlayClassName="login-singnup-overlay"
          style={modalStyle}
          className='login-signup-modal'
          contentLabel="Modal">
            {this.state.view === 'login' ?
            <LoginForm handleLogIn={this.handleLogIn} handleSignUp={this.handleSignUp} aSyncCall={this.state.aSyncCall} key='login'/> :
            <SignupForm handleSignUp={this.handleSignUp} aSyncCall={this.state.aSyncCall} key='signup'/>}
        </Modal>
        <Drawer
          width={250}
          className='drawer'
          openSecondary={true}
          open={this.state.drawerIsOpen}
          docked={false}
          onRequestChange={(open) => this.setState({drawerIsOpen: open})} >
          <List>
            <Subheader>Categories</Subheader>
            <Divider></Divider>
            {categories.map((item, i) => {
              return (
                <Link to={`/categories/${item}`} key={i}>
                  <ListItem primaryText={item} onClick={this.handleDrawerClose}/>
                </Link>)})}
          </List>
        </Drawer>
        <Snackbar
          open={this.state.snackBarOpen}
          message={this.state.responseText}
          autoHideDuration={2500}
          onRequestClose={this.handleRequestSnackBarClose}
        />
      </div>
      );
  }
}

Header.propTypes = {
};
function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}
export default connect(mapStateToProps, actions)(Header);
