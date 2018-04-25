import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import FilmItem from './Components/FilmItem';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar
          barStyle = "dark-content"
          hidden = {false}
        />
        <View style = { styles.content }>
          <FilmItem />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingVertical: 20,
  },
});
