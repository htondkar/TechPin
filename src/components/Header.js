import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

import Modal from 'react-modal';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import AppBar from 'material-ui/AppBar'
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import Logo from '../../images/techpin.png';
import categories from '../helpers/categories'

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

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      drawerIsOpen: false,
      view: 'login',
    }
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

  handleSignUp = () => {
    if (this.state.view === 'login') {
      this.setState({view: 'signup'})
    } else {
      console.log('signup');
    }
 }

  handleLogIn = (username, password) => {
   this.props.authenticate(username, password)
     .then((response)=>{console.log(response)}, ()=>{});
 }

  render() {

    return (
      <div>
        <AppBar
          className={'app-bar'}
          title={<Link to='/'><img src={Logo} className='logo-img'/></Link>}
          showMenuIconButton={false}
          iconElementRight={
            <div>
              <FlatButton
                label={this.props.authenticated ? 'logout' : 'login'}
                onClick={this.openModal}
              />
              <FlatButton
                label="categories"
                onTouchTap={this.handleDrawerToggle}
              />
            </div>
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
            <LoginForm handleLogIn={this.handleLogIn} key='login'/> :
            <SignupForm handleSignUp={this.handleSignUp} key='signup'/>}
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
      </div>
      );
  }
}

Header.propTypes = {
};

export default connect(null, actions)(Header);
