import React, { PureComponent, Fragment } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from 'app/components/Header';
import Carousel from 'app/components/Carousel';
import styles from './styles';

class Detail extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: () => {
      const { name } = navigation.getParam('data', {})
      return (
        <Header.Title title={name || 'Title'} />
      )
    },
    headerLeft: () => (
      <Header.Left onPress={() => navigation.pop()} />
    )
  })

  render() {
    const { navigation } = this.props;
    const { photos, price, currency, description, contact } = navigation.getParam('data', {})

    return (
      <SafeAreaView  style={styles.container}>
        <ScrollView
          bounces={true}
          style={styles.container}
        >
          <Carousel
            data={photos}
          />

          <View style={styles.content}>
            <Text style={styles.title}>Price</Text>
            <Text style={styles.text}>{`${price} ${currency}`}</Text>

            <Text style={styles.title}>Decription</Text>
            <Text style={styles.text}>{description}</Text>

            {contact?.name ? (
              <Fragment>
                <Text style={styles.title}>Contact</Text>
                {contact.phones.map((phone, index) => (
                  <Text key={index} style={styles.text}>{phone}</Text>
                ))}
              </Fragment>
            ) : null}

          </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}

export default Detail;