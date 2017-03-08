import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import SinglePageToolbar from './SinglePageToolbar';
import SinglePageMain from './SinglePageMain';

class SinglePage extends React.Component {

  render() {
    const startUpName = this.props.params.startUpName;
    const index = this.props.list.findIndex(item => item.name === startUpName);
    const startUp = this.props.list[index];
    return (
      <div className='single-page main-content'>
        <SinglePageMain  startUp={startUp}>
          <SinglePageToolbar editAble={true} name={startUpName} auth={this.props.authenticated}/>
        </SinglePageMain>
      </div>
    );
  }
}

SinglePage.propTypes = {
};

function mapStateToProps(state) {
  return {
    list: state.startUps,
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps)(SinglePage);
