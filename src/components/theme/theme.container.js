import { connect } from 'react-redux';
import Theme from './theme.component';
import { getThemeVariant } from '../../store/theme/theme.selectors';

const mapStateToProps = (state) => ({
    themeVariant: getThemeVariant(state),
});

export default connect(mapStateToProps)(Theme);
