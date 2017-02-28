import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import SinglePageToolbar from './SinglePageToolbar';
import SinglePageMain from './SinglePageMain';

class SinglePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const startUpName = this.props.params.startUpName;
    const index = this.props.list.findIndex(item => item.name === startUpName);
    const startUp = this.props.list[index];
    return (
      <div className='single-page main-content'>
        <SinglePageMain  startUp={startUp}>
          <SinglePageToolbar editAble={true}/>
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
  }
}

export default connect(mapStateToProps)(SinglePage);
