import Typography from "@material-ui/core/Typography";
import React from "react";

export const Result = ({ result, toCurrency, themeType}) =>
    <Typography style={{ background: themeType !== 'dark' ? 'ghostwhite' : '#333333' }} className="result-text"  color="textSecondary" variant="h4" component="h4">
    {result && result.toLocaleString(undefined, { style: "currency", currency: toCurrency }).split(' ')[0]}
</Typography>;
