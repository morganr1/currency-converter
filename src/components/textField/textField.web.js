import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        width: 400,
    },
}));

export const TextFieldComponent = ({ value, onChangeCallback, label }) => {
    const classes = useStyles();
    return (
        <FormControl variant="outlined">
            <TextField
                aria-label={`${label} text field`}
                autoFocus={true}
                className={classes.textField}
                id={`${label}-input`}
                label={label}
                value={value}
                onChange={onChangeCallback}
                margin="normal"
                variant="outlined"
                type="number"
                required
                InputProps={{
                    inputMode: "numeric",
                    inputProps: {
                        min: 1
                    }
                }}
            />
        </FormControl>
    );
};
