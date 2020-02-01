import React, { useState } from 'react';
import CurrencyConverter from './components';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';

let darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
});

let lightTheme = createMuiTheme({
    palette: {
        type: 'light',
        background: {
            default: 'linear-gradient(to right, #363795, #005C97)'
        }
    }
});

darkTheme = responsiveFontSizes(darkTheme);
lightTheme = responsiveFontSizes(lightTheme);

function App() {
    const [darkMode, toggleDarkMode] = useState(false);
    const type = darkMode ? darkTheme.palette.type : lightTheme.palette.type;
    return (
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
              <CssBaseline />
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
