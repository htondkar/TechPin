import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

import tagList from '../helpers/tagList';

import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import Chip from 'material-ui/Chip';

class AddForm extends React.Component {
  constructor () {
    super();
    this.state = {
      selectFieldValue : 1,
      chipList : [],
      errors: {}
    };
    this.styles = {
     chip: {
       margin: 4,
     },
   };
  }

  handleSelectFieldChange = (event, index, selectFieldValue) => this.setState({selectFieldValue});

  handleFormFields = (event, value) => {
    const field = event.target.name;
    event.target.name === 'name' && this.setState({nameField: value})
    event.target.name === 'website' && this.setState({websiteField: value})
  };

  handleAddTag = tag => {
    let chipList = this.state.chipList;
    chipList.push(this.state.searchText);
    this.setState({chipList, searchText: ''});
  };

  handleRequestDelete = key => {
    const chips = this.state.chipList;
    chips.splice(key, 1);
    this.setState({chipList: chips});
  };

  handleUpdateInput = searchText => {
    this.setState({
      searchText: searchText,
    });
  };

  handleSubmit = () => {
    const formData = {
      name: this.state.nameField,
      website: this.state.websiteField,
      type: this.state.selectFieldValue,
      tags: this.state.chipList
    }
    const validationResult = this.validateForms(formData);
    console.log(validationResult);
    validationResult.valid ?
    this.clearStateAndSubmit(formData) :
    this.setState({errors: validationResult.errors})
  }

  clearStateAndSubmit = formData => {
    this.setState({errors: {}});
    this.props.submitStartUp(formData);
  }

  validateForms = formData => {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    let valid = true;
    let errors = {};

    if (!formData.name || formData.name === '') {
      errors.name = 'name is rquired !';
      valid = false;
    }
    if (!formData.website || formData.website === '') {
      errors.website = 'website address is required';
      valid = false;
    } else if (!formData.website.match(regex)) {
      errors.website = 'please enter a valid website address'
      valid = false;
    }
    return {valid, errors};
  }

  render() {
    return (
      <div className='add-form'>
        <div><h3>Add a Startup!</h3></div>
        <div>
          <TextField
            name='name'
            errorText={this.state.errors.name}
            floatingLabelText="Product Name"
            onChange={(event, newValue)=>this.handleFormFields(event, newValue)}/>
        </div>
        <div>
          <TextField
            name='website'
            errorText={this.state.errors.website}
            floatingLabelText="Product Website"
            onChange={(event, newValue)=>this.handleFormFields(event, newValue)}/>
        </div>
        <div>
          <SelectField
            name='type'
            floatingLabelText="Product Type"
            value={this.state.selectFieldValue}
            onChange={this.handleSelectFieldChange}>
              <MenuItem value={1} primaryText="Startup" />
              <MenuItem value={2} primaryText="Accelerator" />
              <MenuItem value={3} primaryText="V.C." />
              <MenuItem value={4} primaryText="Product" />
          </SelectField></div>
        <div>
          <AutoComplete
            floatingLabelText="Add Tags"
            filter={AutoComplete.caseInsensitiveFilter}
            searchText={this.state.searchText}
            dataSource={tagList}
            maxSearchResults={5}
            onUpdateInput={this.handleUpdateInput}
            onNewRequest={(tag) => this.handleAddTag(tag)}
          />
        </div>
        <br/>
        <div className='chip-wrapper'>
          {this.state.chipList
            .map((chipName, i) => <Chip
              key={i}
              onRequestDelete={() => this.handleRequestDelete(i)}
              style={this.styles.chip}>
            {chipName}
          </Chip>)}
        </div>
        <br/>
        <div>
          <RaisedButton label="next" primary={true} onClick={this.handleSubmit}/>
        </div>

      </div>
    );
  }
}

AddForm.propTypes = {
};

export default connect()(AddForm);
