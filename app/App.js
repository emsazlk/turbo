import React, { PureComponent } from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store, { persistor } from 'app/storage/store';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from 'app/navigation';
import NavigationService from 'app/navigation/service';
// import Responser from 'app/scenes/Responser';
// import Watcher from 'app/scenes/Watcher';
// import Splesh from 'app/scenes/Splesh';
// import KeyboardView from 'app/components/KeyboardView';
// import Network from 'app/components/Network';

YellowBox.ignoreWarnings([]);

class AppContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigator ref={NavigationService.setNavigator} />
    );
  }
}

export default () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppContainer />
      </PersistGate>

      <StatusBar barStyle='dark-content' />

      {/* <Splesh /> */}
    </Provider>
  </SafeAreaProvider>
);