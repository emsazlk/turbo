import React, { memo } from 'react';
import { IconsName } from 'app/components/Icon';

import Title from './Title';
import Button from './Button';
import Label from './Label';


const Left = memo(Button);
const Right = memo(Button);

Left.defaultProps = {
  direction: 'left',
  icon: IconsName.LEFT_ARROW
};

Right.defaultProps = {
  direction: 'right',
  icon: IconsName.RIGHT_ARROW
};

export default { Title, Left, Right, Label };