import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Snackbar from 'material-ui/Snackbar';

const styles = {
  toolbarHomeIcon: {
    marginLeft: 27,
    cursor: 'pointer',
  },
  editModeIcon: {
    cursor: 'pointer',
    marginRight: '-23px !important',
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
        <Toolbar className='toolbar'>
          <ToolbarGroup firstChild={true}>
            <IconButton tooltip='back to home' tooltipPosition='top-center'>
              <NavigationArrowBack
                style={styles.toolbarHomeIcon}
                hoverColor={'#9C27B0'}
                color='black'
                onClick={()=>browserHistory.push('/')}/>
            </IconButton>
          </ToolbarGroup>
          {editAble && <ToolbarGroup>
            <IconButton tooltip='edit this page' tooltipPosition='top-center'>
              <EditorModeEdit
              style={styles.editModeIcon}
              color='#0D47A1'
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
