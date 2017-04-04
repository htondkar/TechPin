import React, {PropTypes} from 'react';
import StartupPaper from '../sharedComponents/StartupPaper';

function filterSearchTerm(list, searchTerm){
  if (searchTerm !== '') {
    let filterdList = list.filter(item => item.name_en.match(new RegExp(searchTerm, 'gi')))
    return filterdList;
  } else {
    return list;
  }
}

export default class StartupRow extends React.Component {

  render() {
    return (
      <div className="row-wrapper">
        <div className="char-symbol">{this.props.char}</div>
        <div className='startup-row'>
        {filterSearchTerm(this.props.list, this.props.searchTerm)
          .map((item, i) => <StartupPaper WrapperClassName='all-entries-item' key={i} product={item}/>)}
        </div>
      </div>
    );
  }
}

StartupRow.propTypes = {
};
