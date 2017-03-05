import React, {PropTypes} from 'react';

import NavigationExpandMore from 'material-ui/svg-icons/navigation/expand-more';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const AppbarRightControlMobile = ({authenticated, }) => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><NavigationExpandMore color='white'/></IconButton>}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      <MenuItem primaryText="authentication" />
      <MenuItem primaryText="categories" />
      <MenuItem primaryText="all startups" />
    </IconMenu>

  );
}

AppbarRightControlMobile.propTypes = {
};

export default AppbarRightControlMobile
