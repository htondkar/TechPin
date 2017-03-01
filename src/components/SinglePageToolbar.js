import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  toolbarBackArrow: {
    marginLeft: 27,
    cursor: 'pointer',
  },
  editModeIcon: {
    cursor: 'pointer',
  }
}

export default class SinglePageToolbar extends React.Component {

  constructor() {
    super();
    this.state = {
      snackBarOpen: false
    }
  }


  checkAuthAndRedirect = () => {
    if (!this.props.auth) {
      console.log('not auth');
      this.setState({snackBarOpen: true})
    } else {
      browserHistory.push(`/start-ups/${this.props.name}/edit`)
    }
  }

  handleSnackBarClose = () => {
    this.setState({snackBarOpen: false})
  }

  render() {
    const editAble = this.props.editAble;
    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <IconButton tooltip='back' tooltipPosition='top-center'>
              <NavigationArrowBack
                style={styles.toolbarBackArrow}
                hoverColor={'#9C27B0'}
                onClick={()=>browserHistory.push('/')}/>
            </IconButton>
          </ToolbarGroup>
          {editAble && <ToolbarGroup>
            <IconButton tooltip='edit this page' tooltipPosition='top-center'>
              <EditorModeEdit
              style={styles.editModeIcon}
              color='red'
              hoverColor={'#9C27B0'}
              onClick={this.checkAuthAndRedirect}/>
            </IconButton>
            </ToolbarGroup>}
        </Toolbar>
        <Snackbar
          open={this.state.snackBarOpen}
          message='you are not logged in, please log in first'
          autoHideDuration={5000}
          onRequestClose={this.handleSnackBarClose}
        />
      </div>
    );
  }
}

SinglePageToolbar.propTypes = {
};
