import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import * as actions from '../actions/actionCreators';

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
      allTopProducts: [],
    }
  }

  filterByCategory = arr => arr.filter(item => {
       return item.categories
         .some(category => category === this.props.params.category)
  })

  componentWillMount = () => {
    if(Object.keys(this.props.topProducts).length > 0) {
      const allTop = this.props.topProducts
      this.setState({
        allTopProducts: [...allTop.topNew, ...allTop.topRanked, ...allTop.randomProducts]
      })
    } else {
      this.props.initialLoadTop25().then(allTop => {
        this.setState({
          allTopProducts:
          [ ...allTop.top_new,
            ...allTop.top_ranked,
            ...allTop.random_products]
        })
      })
    }
  }

  render() {
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
          {this.filterByCategory(this.state.allTopProducts)
            .map((product, i) => <StartupPaper key={i} product={product} />)}
        </main>
      </div>);
  }
}

CategoryPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    topProducts: state.topProducts
  }
}

export default connect(mapStateToProps, actions)(CategoryPage);
