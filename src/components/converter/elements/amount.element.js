import { TextField } from "./../../index";
import Button from "@material-ui/core/Button";
import ClearIcon from '@material-ui/icons/Clear';
import React from "react";

const styles = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    minWidth: 257
};

export const Amount = ({ disabled, amount, setAmountCallback, resetForm, buttonText }) =>
    <div className="amount-container" style={styles}>
        <TextField {...{ value: amount, label: 'Amount', onChangeCallback: e => setAmountCallback(e.target.value) }} />
        <Button
            disabled={disabled}
            style={{ width: 400 }}
            aria-label="convert currency button"
            size="large"
            onClick={() => resetForm(1)}
            variant="contained"
            color="primary"
            startIcon={<ClearIcon />}
        >
            {buttonText}
        </Button>
    </div>;