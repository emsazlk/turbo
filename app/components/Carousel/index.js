import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon, { IconsName } from 'app/components/Icon';
import Slide from './Slide';
import styles from './styles';

class Snap extends PureComponent {
  constructor() {
    super();

    this.state = {
      sliderWidth: 0,
      active: 0
    };
  }

  handleLayout = event => {
    const { layout: { width } } = event.nativeEvent;
    this.setState({ sliderWidth: width });
  }

  render() {
    const { data, resizeMode, style, initial, onSelect } = this.props;
    const { sliderWidth, active } = this.state;

    return (
      <View style={[styles.container, style]} onLayout={this.handleLayout} >
        {data.length > 0 && sliderWidth !== 0
          ? (
            <Fragment>
              <Carousel
                data={data}
                sliderWidth={sliderWidth}
                itemWidth={sliderWidth}
                firstItem={initial}
                onSnapToItem={(index) => this.setState({ active: index })}
                renderItem={({ item, index }) => (
                  <View
                    style={styles.fullPlace}
                    onPress={onSelect.bind(null, index)}
                  >
                    <Slide
                      resizeMode={resizeMode}
                      image={item}
                    />
                  </View>
                )}
              />
              <Pagination
                dotsLength={data.length}
                activeDotIndex={active}
                containerStyle={styles.paginationContainer}
                dotColor={'rgba(255, 255, 255, 0.92)'}
                dotStyle={styles.dot}
                inactiveDotColor={'rgba(255, 255, 255, 0.5)'}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
              />
            </Fragment>
          ) : (
            <View style={styles.icon} >
              <Icon
                name={IconsName.IMAGE}
                color='#c3c3c3'
                width={44}
                height={44}
              />
            </View>
          )}
      </View>
    );
  }
}

Snap.defaultProps = {
  data: [],
  resizeMode: 'cover',
  initial: 0,
  onSelect: () => { },
};

Snap.propTypes = {
  data: PropTypes.array.isRequired,
  resizeMode: PropTypes.string,
  initial: PropTypes.number
};

export default Snap;