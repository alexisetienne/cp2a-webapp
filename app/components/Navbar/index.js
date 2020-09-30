import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const styles = () => ({
  logoContainer: {
    backgroundColor: '#dbd7d4',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { classes, logout } = this.props;
    return (
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="../../img/logo.png" alt="logoCp2a" />
        <IconButton aria-label="exitToApp" onClick={logout} size="large">
          <ExitToAppIcon fontSize="large" />
        </IconButton>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
};
export default withStyles(styles)(Navbar);
