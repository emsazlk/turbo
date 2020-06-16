import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G, } from 'react-native-svg';

import * as IconsName from './IconsName';

const Icon = memo(({ width, height, viewBox, ...rest }) => (
  <Svg
    width={width}
    height={height}
    viewBox={viewBox}
    {...rest}
  >
    {React.createElement(InnerIcon, rest)}
  </Svg>
));

const InnerIcon = memo(props => {
  const { name, color } = props;

  switch (name) {
    case IconsName.RIGHT_ARROW: return (
      <G>
        <Path fill={color} d='M15.11,6.92a.51.51,0,0,0-.73,0h0a.51.51,0,0,0,0,.72l3.72,3.72H4.6a.5.5,0,0,0-.51.5h0a.51.51,0,0,0,.51.52H18.09L14.37,16.1a.52.52,0,0,0,0,.73.53.53,0,0,0,.73,0h0l4.59-4.6a.5.5,0,0,0,0-.71h0Z' />
      </G>
    );

    case IconsName.LEFT_ARROW: return (
      <G>
        <Path fill={color} d='M8.86,17a.52.52,0,0,0,.73,0h0a.52.52,0,0,0,0-.73L5.88,12.52H19.37a.51.51,0,0,0,.51-.51h0a.51.51,0,0,0-.51-.52H5.88L9.6,7.78A.53.53,0,0,0,9.6,7a.52.52,0,0,0-.73,0h0l-4.59,4.6a.5.5,0,0,0,0,.71h0Z' />
      </G>
    );

    default: return null;
  }
});

Icon.propTypes = {
  name: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  viewBox: PropTypes.string,
};

Icon.defaultProps = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  color: '#ffffff',
};

export { Icon as default, IconsName };


