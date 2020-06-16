import React, { memo } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default memo(({ title, style }) => (
  <View style={styles.container}>
    <Text style={[styles.title, style]} numberOfLines={1}>{title}</Text>
  </View>
));