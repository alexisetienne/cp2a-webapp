import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SaveIcon from '@material-ui/icons/Save';
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';

const themeLabel = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        minWidth: 124,
      },
    },
    MuiFormLabel: {
      root: {
        fontFamily: 'Cairo, sans-serif',
        fontWeight: 'bold',
        fontSize: '14px',
        color: '#2c3258',
        '&$focused': {
          // increase the specificity for the pseudo class
          color: '#2c3258',
        },
      },
    },
  },
});

const styles = theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    backgroundColor: '#e4b61a',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: 12,
    },
  },
  stepperContainer: {
    width: 450,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  button: {
    backgroundColor: '#e4b61a',
    margin: '20px',
    color: '#2c3258',
    borderColor: '#2c3258',
    '&:hover': {
      backgroundColor: '#2c3258',
      color: '#ffffff',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  title: {
    fontSize: '24px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    color: '#2c3258',
  },
  cssLabel: {
    color: '#2c3258',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
  },
  paper: {
    backgroundColor: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50,
    padding: 50,
    width: 600,
  },
  validatorContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: `#e4b61a !important`,
      color: `#e4b61a !important`,
    },
  },
  cssFocused: {
    color: '#2c3258',
    '&:hover:not($inputDisabled):not(inputFocused):not($inputError) $inputNotchedOutline': {
      borderColor: '#e4b61a !important',
    },
  },

  notchedOutline: {
    borderWidth: '1px',
    borderColor: '#e4b61a !important',
    color: '#2c3258',
  },
});

class FormTender extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  renderInput = () => {
    const { classes, register, handleChange } = this.props;
    return (
      <div className={classes.input}>
        <TextValidator
          ref={input => {
            this.description = input;
          }}
          variant="outlined"
          margin="normal"
          key="description"
          label="Description de l'annonce"
          onChange={handleChange('description', this.description)}
          name="description de l'annonce"
          value={register.description}
          fullwidth
          validators={['required']}
          errorMessages={['this field is required']}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <TextValidator
          ref={input => {
            this.society = input;
          }}
          key="society"
          variant="outlined"
          margin="normal"
          label="Nom de l'entreprise"
          onChange={handleChange('society', this.society)}
          name="Nom de l'entreprise"
          value={register.society}
          fullwidth
          validators={['required']}
          errorMessages={['this field is required']}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <TextValidator
          ref={input => {
            this.city = input;
          }}
          key="city"
          variant="outlined"
          label="Ville et code postal"
          margin="normal"
          onChange={handleChange('city', this.city)}
          name="autres revenus"
          value={register.city}
          fullwidth
          validators={['required']}
          errorMessages={['this field is required']}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
        <TextValidator
          ref={input => {
            this.finalDate = input;
          }}
          key="finalDate"
          variant="outlined"
          label="Date limite de candidature"
          margin="normal"
          onChange={handleChange('finalDate', this.finalDate)}
          name="Date limite de candidature"
          value={register.finalDate}
          fullwidth
          validators={['required']}
          errorMessages={['this field is required']}
          InputLabelProps={{
            classes: {
              root: classes.cssLabel,
              focused: classes.cssFocused,
            },
          }}
          InputProps={{
            classes: {
              root: classes.cssOutlinedInput,
              focused: classes.cssFocused,
              notchedOutline: classes.notchedOutline,
            },
          }}
        />
      </div>
    );
  };

  render() {
    const { classes, onSubmit } = this.props;
    return (
      <div className={classes.container}>
        <MuiThemeProvider theme={themeLabel}>
          <Paper elevation={3} className={classes.paper}>
            <img src="../../img/logo.png" alt="" style={{ width: 80 }} />
            <Typography className={classes.title}>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              Creer un appel d'offres
            </Typography>
            <ValidatorForm
              className={classes.form}
              onSubmit={onSubmit}
              onError={errors => console.log(errors)}
            >
              <div className={classes.validatorContainer}>
                {this.renderInput()}
              </div>
              <Button
                type="submit"
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
              >
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                Publier mon appel d'offres
              </Button>
            </ValidatorForm>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
}

FormTender.propTypes = {
  classes: PropTypes.object.isRequired,
  register: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default withStyles(styles)(FormTender);
