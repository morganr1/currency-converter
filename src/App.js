import React, { useState } from 'react';
import CurrencyConverter from './components';
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

function App() {
    const [darkMode, toggleDarkMode] = useState(false);
    let theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: darkMode ? 'dark' : 'light',
                },
            }),
        [darkMode],
    );
    theme = responsiveFontSizes(theme);
    const type = theme.palette.type;
    return (
          <ThemeProvider theme={theme}>
            <Button
                style={{ position: 'absolute', top: 0, right: 0 }}
                variant="contained"
                color="secondary"
                onClick={() => toggleDarkMode(!darkMode)}>
               {darkMode ? 'Go Light' : 'Go Dark' }
            </Button>
            <CurrencyConverter themeType={type} />
          </ThemeProvider>
    );
}

export default App;
