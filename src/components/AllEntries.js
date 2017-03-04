import React, {PropTypes} from 'react';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import StartupPaper from './StartupPaper';

const toolbarStyles = {
  color: 'white',
}
const paperStyles = {
}
export default class AllEntries extends React.Component {
  render() {
    return (
      <div className='main-content'>
        <Toolbar className='all-entries-toolbar' >
          <ToolbarGroup firstChild={true} >
            <ToolbarTitle text="TechPin, Dynamic list of startups in Iran" style={toolbarStyles}/>
          </ToolbarGroup>
        </Toolbar>
        <div className="all-entries-wrapper">
          {this.props.list.map((item, i) => {
            return <StartupPaper key={i} product={item}/>
          })}
        </div>
      </div>
    );
  }
}

AllEntries.propTypes = {
};
