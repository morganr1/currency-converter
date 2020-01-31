import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";

export const Result = ({ result, toCurrency, themeType}) =>
    <Typography style={{ background: themeType !== 'dark' ? 'ghostwhite' : '#333333' }} className="result-text"  color="textSecondary" variant="h4" component="h4">
    {result && result.toLocaleString(undefined, { style: "currency", currency: toCurrency }).split(' ')[0]}
</Typography>;

Result.propTypes = {
    result: PropTypes.any,
    toCurrency: PropTypes.string.isRequired,
    themeType: PropTypes.string.isRequired
};
