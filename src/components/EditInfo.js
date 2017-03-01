import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
// import * as actions from '../actions/actionCreators';

import SinglePageToolbar from './SinglePageToolbar';
import StartupWidgetMoreInfo from './StartupWidgetMoreInfo';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import IconButton from 'material-ui/IconButton';
import Snackbar from 'material-ui/Snackbar';

const editFormSubmitSuccessFeedbackText = 'Thanks, your info will be shown after approval';
const editFormSubmitFailedFeedbackText = 'Oops, please try again';

class EditInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snackBarOpen: false,
      responseText: ''
    }
  }

  textFieldChangeHandler = (event, value) => {
    const formVals = {};
    formVals[event.target.id] = value;
    this.setState({...formVals})
  }

  handleSubmit = () => {
    let formData = new FormData();
    const keys = Object.keys(this.state);
    const values = Object.values(this.state);
    for (let i = 0; i < keys.length; i++) {
      formData.append(keys[i], values[i])
    }
    formData.append('logo', document.getElementById('logo').files[0]);
    this.props.actions.submitMoreInfoForm(formData)
      .then(
        response=>this.setState({snackBarOpen: true, responseText: editFormSubmitSuccessFeedbackText}),
        response=>this.setState({snackBarOpen: true, responseText: editFormSubmitFailedFeedbackText})
      );
  }

  handleSnackBarClose = () => {
    browserHistory.push(`/start-ups/${this.props.params.startUpName}/`);
  }

  render() {
    const startUpName = this.props.params.startUpName;
    const index = this.props.list.findIndex(item => item.name === startUpName);
    const startUp = this.props.list[index];
    const name = startUp && startUp.name;
    return (
      <div className='single-page main-content edit-info'>
        <Paper style={{width: '100%'}} zDepth={3}>
          <SinglePageToolbar editAble={false} />
          <StartupWidgetMoreInfo {...startUp}/>
          <div className="share-info">
            {`Share your info about ${name} with us!`}
          </div>
          <form className="edit-info-form">
            <TextField id='website' className='three-field' hintText="Website" onChange={this.textFieldChangeHandler} />
            <TextField id='email' className='three-field' hintText="email address" type='email' onChange={this.textFieldChangeHandler}/>
            <TextField id='employees' className='three-field' hintText="Number of Employees" onChange={this.textFieldChangeHandler}/>
            <TextField id='launch' className='three-field' hintText="Launch Year" onChange={this.textFieldChangeHandler}/>
            <TextField id='city' className='three-field' hintText="City" onChange={this.textFieldChangeHandler}/>
            <TextField id='country' className='three-field' hintText="Country" onChange={this.textFieldChangeHandler}/>
            <TextField id='desc' fullWidth={true} rows={3} multiLine={true} hintText="What do they do?" onChange={this.textFieldChangeHandler}/>
            <TextField id='android' fullWidth={true} hintText="Android App Url" onChange={this.textFieldChangeHandler}/>
            <TextField id='ios' fullWidth={true} hintText="iOs App Url" onChange={this.textFieldChangeHandler}/>
            <TextField id='linkedin' className='three-field' hintText="Linkedin profile" onChange={this.textFieldChangeHandler}/>
            <TextField id='twitter' className='three-field' hintText="Twitter Account" onChange={this.textFieldChangeHandler}/>
            <TextField id='instagram' className='three-field' hintText="Instagram profile" onChange={this.textFieldChangeHandler}/>
            <div className='full upload-button'>
              <IconButton tooltip="upload a logo">
                <label htmlFor='logo'><FileFileUpload/></label>
                <input type="file" id='logo' name='logo' className='input-file'/>
              </IconButton>
            </div>
          </form>
          <div className="submit-edit">
            <RaisedButton label="Submit for review" primary={true} onClick={this.handleSubmit}/>
          </div>
        </Paper>
        <Snackbar
          open={this.state.snackBarOpen}
          message={this.state.responseText}
          autoHideDuration={3500}
          onRequestClose={this.handleSnackBarClose}
        />
      </div>

    );
  }
}
//
// <input type='file' id='logo' name='logo' className='input-file'/>
// <label htmlFor='logo'>&#10153;</label>
//
EditInfo.propTypes = {
};
function mapStateToProps(state){
  return {token: state.auth.token};
}
export default connect(mapStateToProps)(EditInfo);
