import React, { memo } from 'react';
import { Text } from 'react-native';
import styles from './styles';

export default memo(({ title, style }) => !title ? null : (
  <Text numberOfLines={1} style={[styles.label, style]}>
    {title}
  </Text>
));