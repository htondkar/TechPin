import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';

import IconButton from 'material-ui/IconButton';
import StartupPaper from './StartupPaper';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';

const styles = {
  toolbarBackArrow: {
    marginLeft: 27,
    cursor: 'pointer',
  },
  editModeIcon: {
    cursor: 'pointer',
  }
}

class CategoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  filterByCategory = arr => arr.filter(item => {
    return item.category === this.props.params.category;
  })

  componentDidMount = () => {
    window.scrollTo(0,0);
  }


  render() {
    const list = this.props.startUpsList;
    return (
      <div className='category-page main-content'>
        <header className="category-header">
          <IconButton tooltip='back' tooltipPosition='top-center'>
            <NavigationArrowBack
              style={styles.toolbarBackArrow}
              hoverColor={'#9C27B0'}
              onClick={()=>browserHistory.goBack()}/>
          </IconButton>
          <div className="category-title">
            <span>Top Startups & Products</span>
            <p className="sub-header">{`in ${this.props.params.category} category`}</p>
          </div>
          <div></div>
        </header>
        <main className="category-flex-container">
          {this.filterByCategory(list).map((product, i) => <StartupPaper key={i} product={product} />)}
        </main>
      </div>);
  }
}

CategoryPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    startUpsList: state.startUps
  }
}
export default connect(mapStateToProps)(CategoryPage);
