import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import StartupRow from './StartupRow';

const toolbarStyles = {
  color: 'white',
}

class AllProducts extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      products: {charecter: []}
    }
  }
  componentDidMount = () => {
    if (Object.keys(this.props.allProducts).length === 0) {
      this.props.getAllProducts()
      .then(allProducts => this.setState({products: allProducts}))
    } else {
      this.setState({products: this.props.allProducts})
    }
  }

  searchHandler = (event, value) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className='main-content'>
        <Toolbar className='all-entries-toolbar' >
          <ToolbarGroup firstChild={true} >
            <ToolbarTitle text="Alphabetically ordered list of startups" style={toolbarStyles}/>
          </ToolbarGroup>
          <ToolbarGroup className='search-box-wrapper'>
            <input type='text' name='search' id='search' placeholder='search...' onChange={this.searchHandler}/>
          </ToolbarGroup>
        </Toolbar>
        <div className="all-entries-wrapper">
        {Object.keys(this.state.products)
          .sort().map((charecter, i) => {
          if (this.state.products[charecter].length > 0) {
            return <StartupRow
              searchTerm={this.state.searchTerm}
              key={i} char={charecter}
              list={this.state.products[charecter]} />
          }
        })}
        </div>
      </div>
    );
  }
}
AllProducts.propTypes = {
};
export default connect(null, actions)(AllProducts);
