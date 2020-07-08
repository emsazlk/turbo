import React, { PureComponent, Fragment } from 'react';
import { View, ScrollView, Alert, Text } from 'react-native';
import { connect } from 'react-redux';
import routes from 'app/navigation/routes';
import AdsModule from 'app/modules/ads';
import Header from 'app/components/Header';
import Loader from 'app/components/Loader';
import Card from 'app/components/Card';
import ContentHeader from './ContentHeader';
import styles from './styles';

class Manage extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: () => (
      <Header.Title title='AUTO' />
    ),
  })

  componentDidMount() {
    const { isLoading, onInitial } = this.props;
    if (!isLoading) onInitial(({ error }) => {
      if (error) Alert.alert("Something went wrong")
    })
  }

  handleEndScroll = event => {
    const { contentSize, contentOffset, layoutMeasurement } = event.nativeEvent;
    const { isLoading, onFetch } = this.props;

    const currentPosition = layoutMeasurement.height + contentOffset.y;
    const heightScroll = contentSize.height;

    if (heightScroll - 400 < currentPosition) {

      if (!isLoading) onFetch(({ error }) => {
        if (error) Alert.alert("Something went wrong")
      })
    }
  }
  handleRefresh = () => {
    const { isRefreshing, onRefresh } = this.props;

    if (!isRefreshing) onRefresh(({ error }) => {
      if (error) Alert.alert("Something went wrong")
    })
  }

  handleSelect = item => {
    const { navigation } = this.props
    navigation.navigate(routes.adsDetail, { data: item })
  }

  render() {
    const { data, isLoading, isRefreshing } = this.props

    return (
      <Fragment>
        <ScrollView
          bounces={true}
          style={styles.container}
          contentContainerStyle={styles.content}
          onMomentumScrollEnd={this.handleEndScroll}
          overScrollMode="never"
          refreshControl={(
            <Loader.Refresh
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
            />
          )}
        >
          {data.length > 0 ? data.map((item, index) => (
            <Fragment key={item.standard[0].id}>
              {item.vips.length === 0 ? null : (
                <Fragment>
                  <ContentHeader title='VIP' />

                  <View style={styles.row}>
                    {item.vips.map(el => (
                      <View key={el.id} style={styles.box}>
                        <Card
                          title={el.name}
                          image={el.photo}
                          price={`${el.price} ${el.currency}`}
                          text={el.description}
                          date={el.updated_at}
                          onSelect={this.handleSelect.bind(null, el)}
                        />
                      </View>
                    ))}
                  </View>
                </Fragment>
              )}

              {item.standard.length === 0 ? null : (
                <Fragment>
                  <ContentHeader title='STANDARD' />

                  <View style={styles.row}>
                    {item.standard.map(el => (
                      <View key={el.id} style={styles.box}>
                        <Card
                          title={el.name}
                          image={el.photo}
                          price={`${el.price} ${el.currency}`}
                          text={el.description}
                          date={el.updated_at}
                          onSelect={this.handleSelect.bind(null, el)}
                        />
                      </View>
                    ))}
                  </View>
                </Fragment>
              )}


            </Fragment>
          )) : null}

        </ScrollView>
        <Text style={{
          textAlign: 'center',
          fontSize: 40,
          fontWeight: 'bold',
          position: 'absolute',
          color: 'red',
          top: '40%',
          zIndex: 20,
          width: '100%'
        }}
        pointerEvents="none"
        >
          {data.length * 26}
        </Text>
        {<Loader.Indicator isLoading={isLoading} color='blue' size='large' />}
      </Fragment>
    )
  }
}

export default connect(state => ({
  // vips: state.ads.vips,
  // standard: state.ads.standard,
  data: state.ads.data,
  isLoading: state.ads.isLoading,
  isRefreshing: state.ads.isRefreshing,
}), dispatch => ({
  onInitial: callback => dispatch(AdsModule.initial(callback)),
  onFetch: callback => dispatch(AdsModule.fetch(callback)),
  onRefresh: callback => dispatch(AdsModule.refresh(callback)),
}))(Manage);