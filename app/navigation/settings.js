import React from 'react';
import { Animated, Easing, View } from 'react-native';
import styles from './styles';

const config = (settings = {}) => {
  const {
    transparent, navigationOptions,
    defaultNavigationOptions, ...params
  } = settings;

  return Object.assign(params, {
    navigationOptions: navigationOptions,
    defaultNavigationOptions: Object.assign({
      headerStyle: styles.navbar,
      headerTitleStyle: styles.title,
      headerTitleAllowFontScaling: false,
      headerBackAllowFontScaling: false,
      headerLeftContainerStyle: styles.column,
      headerRightContainerStyle: styles.column,
      headerTitleContainerStyle: styles.column,
      keyboardHandlingEnabled: true,
      headerTitle: () => null,
      headerRight: <View />,
      headerLeft: <View />,
    }, defaultNavigationOptions),
  }, transparent && {
    transparentCard: true,
    transitionConfig: () => ({
      containerStyle: {
        backgroundColor: 'transparent',
      }
    }),
  });
};

const lightbox = (settings = {}) => {
  const { transparent, ...params } = settings;

  return Object.assign(params, {
    headerMode: 'none',
    mode: 'card',
    cardStyle: Object.assign({
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      opacity: 1,
    }, transparent && {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    }),
    transitionConfig: () => ({
      screenInterpolator: () => ({
        transform: [{ translateX: 0 }, { translateY: 0 }]
      }),
      transitionSpec: {
        duration: 0,
        timing: Animated.timing,
        easing: Easing.step0,
        useNativeDriver: true,
      },
      containerStyle: {
        backgroundColor: 'transparent',
      }
    }),
  });
};

const drawer = (settings = {}) => {
  return Object.assign({
    drawerWidth: 280,
    drawerBackgroundColor: '#ffffff',
    drawerType: 'front',
    hideStatusBar: false,
    statusBarAnimation: false,
    unmountInactiveRoutes: true,
  }, settings);
};

const tabs = (position, settings = {}) => {
  const { tabBarOptions } = settings;

  switch (position) {

    case 'top': return Object.assign({
      lazy: true,
      tabBarPosition: 'top',
      tabBarOptions: Object.assign({
        showLabel: true,
        showIcon: false,
        scrollEnabled: false,
        upperCaseLabel: true,
        activeTintColor: styles.active.color,
        inactiveTintColor: styles.inactive.color,
        indicatorStyle: styles.indicator,
        labelStyle: styles.label,
        tabStyle: styles.tab,
        style: styles.top,
      }, tabBarOptions)
    }, settings);

    case 'bottom': return Object.assign({
      lazy: true,
      keyboardHidesTabBar: true,
      tabBarOptions: Object.assign({
        showLabel: false,
        style: styles.bottom,
      }, tabBarOptions),
    }, settings);

    default: return settings;
  }
};

const modal = (settings = {}) => {
  const {
    transparent, overlay, cardStyle,
    defaultNavigationOptions, ...params
  } = settings;

  return Object.assign(params, {
    mode: 'modal',
    headerMode: 'none',
    cardShadowEnabled: false,
    cardOverlayEnabled: false,
    transparentCard: transparent,
    defaultNavigationOptions: Object.assign({
      gesturesEnabled: false
    }, defaultNavigationOptions),
    cardStyle: Object.assign({}, overlay && {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      opacity: 1,
    }, cardStyle),
    transitionConfig: () => ({
      transitionSpec: {
        duration: 200,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: ({ position, scene: { index } }) => ({
        opacity: position.interpolate({
          inputRange: [index - 1, index],
          outputRange: [0, 1]
        })
      })
    })
  });
};

export default {
  config,
  drawer,
  lightbox,
  modal,
  tabs
};
