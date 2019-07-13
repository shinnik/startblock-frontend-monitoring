import {createMuiTheme} from "@material-ui/core";
import './fonts/manrope/web/index.css';
import constants from '../constants/constants';

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
            fontSize: '28px',
            letterSpacing: '0.44px',
        },
        body2: {
            fontSize: '25px',
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
                paddingTop: '10px',
                paddingBottom: '25px',
                paddingLeft: '15px',
                paddingRight: '15px',
                boxShadow: '0px 5.58107px 22.3243px rgba(0, 0, 0, 0.3)',
                borderRadius: '11.1621px',
                width: constants.blueCardWidth,
                height: constants.blueCardHeight,
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
