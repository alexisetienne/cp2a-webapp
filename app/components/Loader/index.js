import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = () => ({
  background: {
    backgroundColor: '#dbd7d4',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '280px',
  },
});

class Loader extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.logoContainer}>
        <img className={classes.logo} src="../../img/logo.png" alt="logoCp2a" />
        <CircularProgress disableShrink />
      </div>
    );
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Loader);
