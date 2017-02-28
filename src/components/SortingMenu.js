import React, {PropTypes} from 'react';

import ContentSort from 'material-ui/svg-icons/content/sort';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

const SortingMenu = ({onChange, column}) => {
  return (
    <IconMenu
      iconButtonElement={
        <IconButton tooltip='change sorting' tooltipPosition="top-center">
        <ContentSort color='#888'/>
      </IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      onChange={onChange}
      className='sort-menu'
    >
      <MenuItem value={`name-${column}`} primaryText="Sort by Name" />
      <MenuItem value={`rating-${column}`} primaryText="Sort by Rate" />
      <MenuItem value={`nps-${column}`} primaryText="Sort by N.P.S" />
    </IconMenu>
  );
}

SortingMenu.propTypes = {
};

export default SortingMenu;
