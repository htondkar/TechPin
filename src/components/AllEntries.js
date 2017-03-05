import React, {PropTypes} from 'react';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import StartupRow from './StartupRow';

const toolbarStyles = {
  color: 'white',
}

const paperStyles = {
}

export default class AllEntries extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
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
          <ToolbarGroup>
            <input type='text' name='search' id='search' placeholder='search...' onChange={this.searchHandler}/>
          </ToolbarGroup>
        </Toolbar>
        <div className="all-entries-wrapper">
        {Object.keys(this.props.sortedList).map((char, i) => {
          if (this.props.sortedList[char].length > 0) {
            return <StartupRow
              searchTerm={this.state.searchTerm}
              key={i} char={char}
              list={this.props.sortedList[char]} />
          }
        })}
        </div>
      </div>
    );
  }
}
AllEntries.propTypes = {
};
