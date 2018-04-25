import React, { Component } from 'React';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class FilmItem extends Component {
  render() {
    return (
      <View>
        <Text style = { styles.title }>Les Gardiens de la Galaxie</Text>
        <View style = { styles.posterWrapper } >
          <Image
            source={ require('../assets/guardians.jpg') }
            style={ styles.poster }
            resizeMode='contain'
          />
        </View>
        <View style = { styles.detailsWrapper }>
          <Text>Director: James Gunn</Text>
          <Text>Release date: 13 août 2014</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
  },
  posterWrapper: {
    backgroundColor: 'black',
    marginVertical: 20,
  },
  poster: {
    height: 400,
    width: null,
  },
  detailsWrapper: {
    paddingHorizontal: 20,
  },
});
