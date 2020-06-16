import React, { memo } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'app/components/Icon';
import Label from './Label';
import styles from './styles';

export default memo(props => {
  const { direction, title, onPress, disabled, color, icon } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      style={styles.button}
      hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
    >
      {(title && direction === 'right') ? (
        <Label title={title} />
      ) : null}

      {!icon ? null : (
        <Icon
          name={icon}
          color={color || '#ffffff'}
          style={StyleSheet.flatten([
            (title && direction === 'left') && { marginRight: 8 },
            (title && direction === 'right') && { marginLeft: 8 }
          ])}
        />
      )}

      {(title && direction === 'left') ? (
        <Label title={title} />
      ) : null}
    </TouchableOpacity>
  );
});