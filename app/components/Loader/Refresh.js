import React, { memo } from 'react';
import { RefreshControl } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Refresh = memo(({ color, ...rest }) => (
  <RefreshControl
    {...rest}
    tintColor={color}
    colors={[color]}
  />
));

Refresh.defaultProps = {
  color: styles.loader.color,
};

Refresh.propTypes = {
  refreshing: PropTypes.bool,
  onRefresh: PropTypes.func,
  color: PropTypes.string
};

export default Refresh;