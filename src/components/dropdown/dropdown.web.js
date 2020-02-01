import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1)
  },
  select: {
    width: 170,
    [theme.breakpoints.down(460)]: {
      width: 120
    },
    [theme.breakpoints.down(362)]: {
      width: 92
    }
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export const DropDownComponent = ({
  disabled,
  values,
  currentValue,
  onChangeCallback,
  label
}) => {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

  return (
    <Fragment>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} id={`${label}-dropdown-label`}>
          {label}
        </InputLabel>
        <Select
          disabled={disabled}
          className={classes.select}
          name={label}
          labelId={`${label}-dropdown-label`}
          id={`${label}-dropdown`}
          value={currentValue}
          onChange={onChangeCallback}
          labelWidth={labelWidth}
        >
          {values.map(curr => (
            <MenuItem key={curr} value={curr}>
              {curr}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Fragment>
  );
};

DropDownComponent.propTypes = {
  disabled: PropTypes.bool,
  values: PropTypes.array.isRequired,
  currentValue: PropTypes.string.isRequired,
  onChangeCallback: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};
