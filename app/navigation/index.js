
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Settings from './settings';
import routes from './routes';

import Ads from 'app/scenes/Ads'

const AdsStack = createStackNavigator({
  [routes.adsManage]: { screen: Ads.Manage },
  [routes.adsDetail]: { screen: Ads.Detail },
}, Settings.config({
  initialRouteName: routes.adsManage,
  headerMode: 'screen'
}));

const MainStack = createStackNavigator({
  [routes.ads]: AdsStack,
}, Settings.modal({
  initialRouteName: routes.drawer,
  transparent: true,
  overlay: true
}));

const RootStack = createSwitchNavigator({
  [routes.main]: { screen: MainStack }
}, Settings.config({
  headerMode: 'none',
  initialRouteName: routes.main
}));

const AppStack = createStackNavigator({
  [routes.root]: { screen: RootStack }
}, Settings.lightbox({
  initialRouteName: routes.root
}));

export default createAppContainer(AppStack);