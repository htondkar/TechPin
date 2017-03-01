import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

import SinglePageToolbar from './SinglePageToolbar';
import StartupWidgetMoreInfo from './StartupWidgetMoreInfo';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const startUpName = this.props.params.startUpName;
    const index = this.props.list.findIndex(item => item.name === startUpName);
    const startUp = this.props.list[index];
    return (
      <div className='single-page main-content edit-info'>
        <Paper style={{width: '100%'}} zDepth={3}>
          <SinglePageToolbar editAble={false} />
          <StartupWidgetMoreInfo {...startUp}/>
          <div className="edit-info-main">
            <TextField hintText="Website" />
            <TextField hintText="email address" />
            <TextField hintText="Android App Url" />
            <TextField hintText="iOs App Url" />
            <TextField hintText="Linkedin profile" />
            <TextField hintText="Twitter Account" />
            <TextField hintText="Instagram profile" />
            <TextField hintText="Launch Year" />
            <TextField hintText="City" />
            <TextField hintText="Country" />
            <TextField hintText="Number of Employees" />
          </div>
        </Paper>
      </div>

    );
  }
}

EditInfo.propTypes = {
};

export default connect(null, actions)(EditInfo);
