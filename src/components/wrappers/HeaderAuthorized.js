import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { logOut } from '../../store/reducer';
import Header from '../Header';

const HeaderAuthorized = ({ username, image, logOut }) => {
  return <Header username={username} image={image} logOut={logOut} authorized />;
};
HeaderAuthorized.defaultProps = {
  username: '',
  image: '',
  logOut: () => {},
};
HeaderAuthorized.propTypes = {
  username: propTypes.string,
  image: propTypes.string,
  logOut: propTypes.func,
};

const mapStateToProps = (state) => {
  return {
    username: state?.user?.username,
    image: state?.user?.image,
  };
};

export default connect(mapStateToProps, { logOut })(HeaderAuthorized);
