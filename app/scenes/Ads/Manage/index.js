import React, { PureComponent, Fragment } from 'react';
import { View, ScrollView, Alert, Text, FlatList, SectionList } from 'react-native';
import { connect } from 'react-redux';
import routes from 'app/navigation/routes';
import AdsModule from 'app/modules/ads';
import AdsSelector from 'app/modules/ads/selectors';
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

  handleFetch = ({ distanceFromEnd }) => {
    const { isLoading, onFetch } = this.props;

    if (!isLoading && Math.abs(distanceFromEnd) >= 40) onFetch(({ error }) => {
      if (error) Alert.alert("Something went wrong")
    })
  }

  handleEndScroll = event => {
    const { contentSize, contentOffset, layoutMeasurement } = event.nativeEvent;
    const { isLoading, onFetch } = this.props;

    const currentPosition = layoutMeasurement.height + contentOffset.y;
    const heightScroll = contentSize.height;

    if (heightScroll - 100 < currentPosition) {

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
    const { list, isLoading, isRefreshing } = this.props;

    console.log('list', list)

    return (
      <Fragment>

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
          {/* list.length - (Math.floor(list.length / 26)) * 4 */}
          {list.length * 13}
        </Text>

      {/*   <FlatList
          data={list}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          initialNumToRender={20}
          // maxToRenderPerBatch={20}
          // removeClippedSubviews={true}
          onEndReached={this.handleFetch}
          onEndReachedThreshold={0.8}
          onMomentumScrollEnd={this.handleEndScroll}
          refreshControl={(
            <Loader.Refresh
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
            />
          )}
          ItemSeparatorComponent={({ leadingItem }) => {
            // console.log('leadingItem', leadingItem)
            // return null
            // let index = leadingItem.findIndex(el => el.label);
            return leadingItem[0].header
              ? <ContentHeader title={leadingItem[0].header} />
              : null
          }}
          renderItem={({ item }) => {
            return (
              item.header ? null : (
                <Card
                  style={styles.box}
                  title={item.name}
                  image={item.photo}
                  price={`${item.price} ${item.currency}`}
                  text={item.description}
                  date={item.updated_at}
                  onSelect={this.handleSelect.bind(null, item)}
                />
              )

            )
          }}
        /> */}

        {/* <FlatList
          data={list}
          keyExtractor={(item, index) => String(item.key)}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          // removeClippedSubviews={true}
          onEndReached={this.handleFetch}
          onEndReachedThreshold={0.8}
          onMomentumScrollEnd={this.handleEndScroll}
          refreshControl={(
            <Loader.Refresh
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
            />
          )}
          renderItem={({ item: { title, data } }) => {
            return (
              <Fragment>
                <ContentHeader title={title} />
                {<FlatList
                  data={data}
                  keyExtractor={(item) => String(item.id)}
                  numColumns={2}
                  scrollEnabled={false}
                  renderItem={({ item }) => {
                    return (
                      <Card
                        style={styles.box}
                        title={item.name}
                        image={item.photo}
                        price={`${item.price} ${item.currency}`}
                        text={item.description}
                        date={item.updated_at}
                        onSelect={this.handleSelect.bind(null, item)}
                      />
                    )
                  }}
                
                />}
              </Fragment>

            )
          }}
        /> */}


        {        <SectionList
          sections={list}
          keyExtractor={(item, index) => index}
          onEndReachedThreshold={0.8}
          onEndReached={this.handleFetch}
          onMomentumScrollEnd={this.handleEndScroll}
          // initialNumToRender={20}
          // maxToRenderPerBatch={20}  
          // removeClippedSubviews={true}
          refreshControl={(
            <Loader.Refresh
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
            />
          )}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: 'row' }}>
                {item.map(el => (
                  <Card
                    key={el.id}
                    style={styles.box}
                    title={el.name}
                    image={el.photo}
                    price={`${el.price} ${el.currency}`}
                    text={el.description}
                    date={el.updated_at}
                    onSelect={this.handleSelect.bind(null, el)}
                  />
                ))}
              </View>
            )
          }}
          renderSectionHeader={({ section: { title } }) => (
            <ContentHeader title={title} />
          )}
        />}

        {/* <FlatList
          data={list}
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          initialNumToRender={20}
          maxToRenderPerBatch={20}
          // removeClippedSubviews={true}
          onEndReached={this.handleFetch}
          onEndReachedThreshold={0.8}
          onMomentumScrollEnd={this.handleEndScroll}
          refreshControl={(
            <Loader.Refresh
              refreshing={isRefreshing}
              onRefresh={this.handleRefresh}
            />
          )}
          ItemSeparatorComponent={({ leadingItem }) => {
            let index = leadingItem.findIndex(el => el.label);
            return index >= 0
              ? <ContentHeader title={leadingItem[index].label} />
              : null
          }}
          renderItem={({ item }) => {
            return (
              <Card
                style={styles.box}
                title={item.name}
                image={item.photo}
                price={`${item.price} ${item.currency}`}
                text={item.description}
                date={item.updated_at}
                onSelect={this.handleSelect.bind(null, item)}
              />
            )
          }}
        />

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
          {list.length}
        </Text> */}
        {<Loader.Indicator isLoading={isLoading} color='blue' size='large' />}
      </Fragment>
    )
  }
}

export default connect(state => ({
  data: state.ads.data,
  list: AdsSelector.getList(state),
  isLoading: state.ads.isLoading,
  isRefreshing: state.ads.isRefreshing,
}), dispatch => ({
  onInitial: callback => dispatch(AdsModule.initial(callback)),
  onFetch: callback => dispatch(AdsModule.fetch(callback)),
  onRefresh: callback => dispatch(AdsModule.refresh(callback)),
}))(Manage);