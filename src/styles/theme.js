import {createMuiTheme} from "@material-ui/core";
import './fonts/manrope/web/index.css';
import './fonts/robotomono/robotomono.css';

let theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Manrope',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        body1: {
            fontSize: '23px',
            letterSpacing: '0.44px',
        },
        body2: {
            fontSize: '20px',
            letterSpacing: '0.44px',
        }
    },
    palette: {
        primary: {
            main: '#0099DC'
        },
        secondary: {
            main: '#FF8282',
        },
    },
    overrides: {

        MuiPaper: {
            elevation1: {
                backgroundColor: '#0099DC',
                color: 'white',
                boxShadow: '0px 5.58107px 22.3243px rgba(0, 0, 0, 0.3)',
                borderRadius: '11.1621px',
            }
        },
        MuiTableCell: {
            head: {
                color: 'black'
            }
        },
        MuiTableRow: {
            root: {
                height: '60px'
            }
        }
    }
});


export default theme;
