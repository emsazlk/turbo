import React, { memo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Indicator = memo(({ isLoading, flex, ...rest }) => {
  return !isLoading ? null : (
    <View style={[styles.container, { flex }]} pointerEvents='none'>
      <ActivityIndicator style={styles.loader} {...rest} />
    </View>
  );
});

Indicator.defaultProps = {
  flex: 1,
  size: 'large',
  color: styles.loader.color
};

Indicator.propTypes = {
  isLoading: PropTypes.bool,
  flex: PropTypes.oneOf([0, 1]),
  size: PropTypes.oneOf(['small', 'large']),
  color: PropTypes.string
};

export default Indicator;