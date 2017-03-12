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
      responseText: '',
      formData: {}
    }
  }

  textFieldChangeHandler = (event, value) => {
    const formVals = {};
    formVals[event.target.id] = value;
    const prevFormData = this.state.formData;
    const newFormData = Object.assign({}, prevFormData, formVals);
    this.setState({formData: newFormData})
  }

  valid = (values) => {
    if (values.length >= 1) {
      return true;
    }
    return false;
  }

  handleSubmit = () => {
    let formData = new FormData();
    const keys = Object.keys(this.state.formData);
    const values = Object.values(this.state.formData);
    if(this.valid(values)) {
      console.log('valid');
      this.setState({formIsValid: true})
      for (let i = 0; i < keys.length; i++) {
        formData.append(keys[i], values[i])
      }
      formData.append('logo', document.getElementById('logo').files[0]);
      this.props.actions.submitAddNewVersion(formData)
        .then(
          response => this.setState({snackBarOpen: true, responseText: editFormSubmitSuccessFeedbackText}),
          response => this.setState({snackBarOpen: true, responseText: editFormSubmitFailedFeedbackText})
        );
    } else {
      this.setState({snackBarOpen: true, responseText: 'please fill at least 1 field', formIsValid: false})
    }
  }

  handleSnackBarClose = () => {
    this.state.formIsValid && browserHistory.push(`/start-ups/${this.props.params.startUpName}/`);
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
            <TextField id='website' className='three-field' floatingLabelText="Website" onChange={this.textFieldChangeHandler} />
            <TextField id='email' className='three-field' floatingLabelText="email address" type='email' onChange={this.textFieldChangeHandler}/>
            <TextField id='employees' className='three-field' floatingLabelText="Number of Employees" onChange={this.textFieldChangeHandler}/>
            <TextField id='year' className='three-field' floatingLabelText="Launch Year" onChange={this.textFieldChangeHandler}/>
            <TextField id='city' className='three-field' floatingLabelText="City" onChange={this.textFieldChangeHandler}/>
            <TextField id='country' className='three-field' floatingLabelText="Country" onChange={this.textFieldChangeHandler}/>
            <TextField id='description_en' fullWidth={true} rows={3} multiLine={true} floatingLabelText="What do they do?" onChange={this.textFieldChangeHandler}/>
            <TextField id='android_app' fullWidth={true} floatingLabelText="Android App Url" onChange={this.textFieldChangeHandler}/>
            <TextField id='ios_app' fullWidth={true} floatingLabelText="iOs App Url" onChange={this.textFieldChangeHandler}/>
            <TextField id='linkedin' className='three-field' floatingLabelText="Linkedin profile" onChange={this.textFieldChangeHandler}/>
            <TextField id='twitter' className='three-field' floatingLabelText="Twitter Account" onChange={this.textFieldChangeHandler}/>
            <TextField id='instagram' className='three-field' floatingLabelText="Instagram profile" onChange={this.textFieldChangeHandler}/>
            <div className='full upload-button'>
              <div>
                <div className="upload-logo-text">upload logo</div>
                <IconButton style={{width: '24px', height: '24px', padding: 0}}>
                <input type="file" id='logo' name='logo' className='input-file'/>
                <label htmlFor='logo'><FileFileUpload/></label>
                </IconButton>
              </div>
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

EditInfo.propTypes = {
};

function mapStateToProps(state){
  return {token: state.auth.token};
}
export default connect(mapStateToProps)(EditInfo);
