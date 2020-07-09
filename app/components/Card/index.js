import React, { memo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const Card = memo(({ image, price, title, text, date, onSelect, style }) => {

  return (
    <TouchableOpacity
      onPress={onSelect}
      style={[styles.container, style]}
      activeOpacity={0.6}
    >
      <View style={styles.imageBox}>
        <FastImage
          source={{ uri: image }}
          style={styles.image}
          fallback={!image?.startsWith('http')}
          resizeMode='cover'
        />

        {!price ? null : (
          <View style={styles.imageTitle}>
            <Text style={[styles.text, styles.colorWhite]}>{price}</Text>
          </View>)}
      </View>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        <Text style={styles.text} numberOfLines={1}>{text}</Text>

        {!date ? null : (
          <Text style={[styles.text, styles.colorGray]} numberOfLines={1}>
            {moment(date).format('YYYY-MM-DD')}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
})

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  onSelect: PropTypes.func,
}

Card.defaultProps = {
  onSelect: () => { }
}

export default Card;

