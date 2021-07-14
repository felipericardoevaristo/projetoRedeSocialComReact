import { createMuiTheme } from '@material-ui/core/styles';
import palette from './palette';
import typography from './typography';

/*vou criar meu objeto de temas*/
const theme = createMuiTheme({
    palette,
    typography
});

export default theme;