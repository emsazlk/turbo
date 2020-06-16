import React, { memo } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const Slide = memo(({ image, resizeMode }) => {
  return (
    <View style={styles.slide}>
      <FastImage
        source={{ uri: image }}
        style={styles.image}
        fallback={!image.startsWith('http')}
        resizeMode={resizeMode}
      />
    </View>
  );
});

Slide.propTypes = {
  image: PropTypes.string.isRequired,
  resizeMode: PropTypes.string,
};

export default Slide;
