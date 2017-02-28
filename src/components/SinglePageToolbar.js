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

const styles = {
  toolbarBackArrow: {
    marginLeft: 27,
    cursor: 'pointer',
  },
  editModeIcon: {
    cursor: 'pointer',
  }
}

// browserHistory.goBack
const SinglePageToolbar = ({editAble}) => {
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
        {editAble && <ToolbarGroup><EditorModeEdit style={styles.editModeIcon} hoverColor={'#9C27B0'}/></ToolbarGroup>}
      </Toolbar>
    </div>);
}

SinglePageToolbar.propTypes = {
};

export default SinglePageToolbar;
