import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default memo(({ title }) => (
  <View style={styles.header}>
    <Text numberOfLines={1}>{title}</Text>
  </View>
))