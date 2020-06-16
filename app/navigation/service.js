import { createRef } from 'react';
import { StackActions, NavigationActions } from 'react-navigation';

class NavigationService {
  constructor() {
    this.navigator = createRef();
    this.setNavigator = this.navigator;
  }

  dispatch = action => {
    const { current } = this.navigator;

    if (current) current.dispatch(action);
  }

  navigate = (routeName, params) => {
    this.dispatch(NavigationActions.navigate({
      routeName, params
    }));
  }
}

export { StackActions, NavigationActions };
export default new NavigationService();