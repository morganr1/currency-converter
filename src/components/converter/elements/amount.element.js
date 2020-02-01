import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from './../../index';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
  button: {
    width: 400,
    marginTop: 20,
    [theme.breakpoints.down(460)]: {
      width: 300
    },
    [theme.breakpoints.down(362)]: {
      width: 200
    }
  },
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    width: 257
  }
}));

export const Amount = ({
  disabled,
  amount,
  setAmountCallback,
  resetForm,
  buttonText
}) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        {...{
          value: amount,
          label: 'Amount',
          onChangeCallback: e => setAmountCallback(e.target.value)
        }}
      />
      <Button
        classes={{ root: classes.button }}
        disabled={disabled}
        aria-label="convert currency button"
        size="large"
        onClick={() => resetForm(1)}
        variant="contained"
        color="primary"
        startIcon={<ClearIcon />}
      >
        {buttonText}
      </Button>
    </div>
  );
};

Amount.propTypes = {
  disabled: PropTypes.bool,
  amount: PropTypes.number.isRequired,
  setAmountCallback: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired
};
